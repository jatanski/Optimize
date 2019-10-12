const { Thread, validate } = require("../models/thread");
const auth = require("../middleware/auth");
const { User } = require("../models/user");
const { Team } = require("../models/team");
const axios = require("axios");

const express = require("express");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  console.log(req.body);
  let team = await Team.findById(req.body.teamId);
  if (!team)
    return res.status(404).send("The team with the given ID was not found.");

  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send("The user was not found.");

  const date = Date.now();

  console.log(req.body);

  await axios
    .post(
      "https://slack.com/api/chat.postMessage",
      {
        token:
          "xoxp-773287386577-781574553623-786705570273-9a348ee226e8361a45ac2ec9349ea1d5",
        channel: req.body.channelId,
        text:
          "W twoim projekcie pojawiło się nowe zapytanie! Wbijaj zobaczyć co to: http://localhost:3000/home/home",
        username: "Dobry ziomek Bot"
      },
      {
        headers: {
          Authorization: `Bearer xoxp-773287386577-781574553623-786705570273-9a348ee226e8361a45ac2ec9349ea1d5`
        }
      }
    )
    .then(response => {
      console.log(response.data);
    });

  const thread = new Thread({
    name: req.body.name,
    posted_at: date,
    author: user.email,
    content: req.body.content,
    category: req.body.category,
    target: req.body.target,
    channelId: req.body.channelId
  });

  team.threads.push(thread);
  team.markModified("threads");
  team = await team.save();

  res.send(thread);
  res.status(200).send("Thread sent.");
});

// zwraca wszystkie wątki w proojekcie
router.get("/:id", auth, async (req, res) => {
  let team = await Team.findById(req.params.id);
  if (!team)
    return res.status(404).send("The team with the given ID was not found.");

  const threads = await team.threads;
  res.send(threads);
});

// router.get('/:id', auth, async (req, ) => {
//     let team = await Team.findById(req.team._id);
//     if (!team) return res.status(404).send('The team with the given ID was not found.');

//     const index = Team.threads.findIndex((element) => {
//         return element._id == req.params.id
//     });
//     if (index === -1) return res.status(404).send("Couldn't find thread with that id.");

//     const thread = await team.threads[index];
//     res.send(thread);
// });

router.delete("/:id", auth, async (req, res) => {
  let team = await Team.findById(req.body.teamId);
  if (!team)
    return res.status(404).send("The team with the given ID was not found.");

  const index = team.threads.findIndex(element => {
    return element._id == req.params.id;
  });
  if (index === -1)
    return res.status(404).send("Couldn't find thread with that id.");

  const thread = await team.threads[index];
  team.threads.splice(index, 1);

  team.markModified("threads");
  team = await team.save();
  res.status(200).send(thread);
});
module.exports = router;
