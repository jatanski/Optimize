const { Comment, validate } = require("../models/comment");
const auth = require("../middleware/auth");
const { User } = require("../models/user");
const { Team } = require("../models/team");

const express = require("express");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let threadId = req.body.threadId;
  let team = await Team.findById(req.body.teamId);
  if (!team)
    return res.status(404).send("The team with the given ID was not found.");

  const idx = team.threads.findIndex(thread => {
    return thread._id == threadId;
  });

  if (idx === -1)
    return res.status(404).send("Thread with the given id not found.");

  let thread = await team.threads[idx];

  if (!thread)
    return res.status(404).send("The thread with the given ID was not found.");

  let user = await User.findById(req.user._id);
  if (!user) return res.status(404).send("The user was not found.");
  // console.log(thread);
  const date = Date.now();

  const comment = new Comment({
    name: req.body.name,
    posted_at: date,
    author: user.email,
    content: req.body.content
  });

  thread.comments.push(comment);
  team.markModified("threads");
  team.markModified("comment");
  team = await team.save();

  res.send(comment);
  res.status(200).send("Comment sent.");
});

// zwraca wszystkie wątki w proojekcie
router.get("/", auth, async (req, res) => {
  let team = await Team.findById(res.body.TeamId);
  if (!team)
    return res.status(404).send("The team with the given ID was not found.");

  const idx = team.threads.findIndex(thread => {
    return thread._id == res.body.ThreadId;
  });
  if (idx === -1)
    return res.status(404).send("Thread with the given id not found.");

  let thread = await team.threads[index];
  let comment = await thread.find({});

  res.send(comment);
});

// router.delete('/:id', auth, async (req, res) => {
//     let team = await Team.findById(req.body.teamId);
//     if (!team) return res.status(404).send('The team with the given ID was not found.');

//     const index = team.threads.findIndex((element) => {
//         return element._id == req.params.id
//     });
//     if (index === -1) return res.status(404).send("Couldn't find thread with that id.");

//     const thread = await team.threads[index];
//     team.threads.splice(index, 1);

//     team.markModified('threads');
//     team = await team.save();
//     res.status(200).send(thread);
// });
module.exports = router;
