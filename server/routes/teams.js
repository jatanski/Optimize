const express = require("express");
const { User } = require("../models/user");
const { Team, validate } = require("../models/team");
const router = express.Router();
const auth = require("../middleware/auth");
const config = require("../startup/config");
const axios = require("axios");

router.post("/", auth, async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ _id: req.user._id });
  if (!user) return res.status(400).send("There is no user with this id.");

  // create new channel on slack
  await axios
    .post(
      "https://slack.com/api/conversations.create",
      {
        token: config.token,
        name: req.body.name,
        is_private: "true"
      },
      {
        headers: {
          Authorization: `Bearer ${config.token}`
        }
      }
    )
    .then(response => {
      if (response.data.error) console.log(response.data.error);
      channelId = response.data.channel.id;
    })
    .catch(error => {
      console.error(error);
    });

  // add users to channel

  const data = {
    token: config.token,
    channel: channelId,
    users: req.body.slackId
  };

  await axios
    .post("https://slack.com/api/conversations.invite", data, {
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    })
    .then(response => {
      if (response.data.error) console.log(response.data.error);
    })
    .catch(error => {
      console.error(error);
    });

  try {
    const team = new Team({
      name: req.body.name,
      description: req.body.description,
      users: req.body.users,
      roles: req.body.roles,
      channelId: channelId
    });

    async function addTeam(item) {
      const currentUser = await User.findOne({ _id: item });
      currentUser.teams.push(team._id);
      currentUser.markModified("teams");
      await currentUser.save();
    }

    req.body.users.forEach(addTeam);

    await user.save();
    await team.save();

    res.send(team);
  } catch (ex) {
    res.status(500).send(ex.message);
  }
});

router.get("/", auth, async (req, res) => {
  let user = await User.findOne({ _id: req.user._id });
  let team = await Team.findOne({ users: req.user._id });
  if (!user) return res.status(400).send("There is no user with this id.");
  if (!team) return res.status(400).send("This user hass no teams.");

  const teams = team;

  res.send(teams);
});

module.exports = router;
