const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { User, validate } = require("../models/user");
const config = require("../startup/config");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  let slackId = "";

  //download users list of slack workspace, find user and add his id to userObject
  await axios
    .post(
      "https://slack.com/api/users.list",
      {
        token: config.token
      },
      {
        headers: {
          Authorization: `Bearer ${config.token}`
        }
      }
    )
    .then(response => {
      if (response.data.error) console.log(response.data.error);
      const members = response.data.members;
      const user = members.filter(member => {
        return member.name == req.body.slackName;
      });

      slackId = user[0].id;
    })
    .catch(error => {
      console.error(error);
    });

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    slackId: slackId
  });

  // Generate salt and hashed password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  const token = user.generateAuthToken();
  res.header("x-auth-token", token);
  res.send(user);
});

router.get("/", auth, async (req, res) => {
  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send("The user was not found.");

  res.status(200).send(user);
});

module.exports = router;
