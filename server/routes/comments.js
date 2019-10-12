const { Comment, validate } = require("../models/comment");
const auth = require('../middleware/auth');
const { User } = require('../models/user');
const { Thread } = require('../models/thread');

const express = require('express');
const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let thread = await Thread.findById(req.body.threadId);
    if (!thread) return res.status(404).send('The thread with the given ID was not found.');

    let user = await User.findById(req.user._id);
    if (!user) return res.status(404).send('The user was not found.');

    const date = Date.now();

    const comment = new Comment({
        name: req.body.name,
        posted_at: date,
        author: user.email,
        content: req.body.content
    });

    thread.comments.push(comment);

    res.send(comment);
    res.status(200).send('Thread comment.');
});

// // zwraca wszystkie wątki w proojekcie 
// router.get('/:id', auth, async (req, res) => {
//     let team = await Team.findById(req.params.id);
//     if (!team) return res.status(404).send('The team with the given ID was not found.');

    
//     const threads = await team.threads;
//     res.send(threads);
// });

// // router.get('/:id', auth, async (req, ) => {
// //     let team = await Team.findById(req.team._id);
// //     if (!team) return res.status(404).send('The team with the given ID was not found.');

// //     const index = Team.threads.findIndex((element) => {
// //         return element._id == req.params.id
// //     });
// //     if (index === -1) return res.status(404).send("Couldn't find thread with that id.");

// //     const thread = await team.threads[index];
// //     res.send(thread);
// // });

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