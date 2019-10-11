const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();
const axios = require("axios");
const { User, validate } = require("../models/user");

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  console.log(req.body);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  let slackId = "";

  // download users list of slack workspace, find user and add his id to userObject
  await axios
    .post(
      "https://slack.com/api/users.list",
      {
        token:
          "xoxp-773287386577-781574553623-791353069511-1e0d1c14f0182f0d156e0619e2d78ea2"
      },
      {
        headers: {
          Authorization:
            "Bearer xoxp-773287386577-781574553623-791353069511-1e0d1c14f0182f0d156e0619e2d78ea2"
        }
      }
    )
    .then(response => {
      const members = response.data.members;

      const user = members.filter(member => {
        return member.name == req.body.slackName;
      });

      console.log(user[0].id);

      slackId = user[0].id;
    });

  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    slackId: slackId
  });
  user.teams.push("essa");

  // Generate salt and hashed password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  console.log(user);
  await user.save();
  const token = user.generateAuthToken();
  res.header("x-auth-token", token);
  res.send(user);
});

router.get('/', auth, async (req, res) => {
    let user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('The user was not found.');

    res.status(200).send(user);
});

module.exports = router;
