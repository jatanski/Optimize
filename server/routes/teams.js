const express = require('express');
const { User } = require('../models/user');
const { Team, validate } = require('../models/team');
const Joi = require('@hapi/joi');
const router = express.Router();
const auth = require('../middleware/auth');
const _ = require("lodash");

router.post('/', auth, async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let user = await User.findOne({_id: req.user._id });
    if (!user) return res.status(400).send("There is no user with this id.");



    try {
        const team = new Team(_.pick(req.body, ['name', 'description', 'users', 'roles']));
        
        async function addTeam(item) {
            const currentUser = await User.findOne({_id: item});
            currentUser.teams.push(team._id);
            currentUser.markModified('teams');
            await currentUser.save();
        }

        req.body.users.forEach(addTeam);

        team.users.push(user.id);

        
        await user.save();
        await team.save();

        res.send(team);

    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

router.get('/', auth, async (req, res) => {
    let user = await User.findOne({ _id: req.user._id });
    let team = await Team.findOne({users: req.user._id});
    if (!user) return res.status(400).send("There is no user with this id.");
    if (!team) return res.status(400).send("This user hass no teams.");

    const teams = team;

    res.send(teams);
});


module.exports = router;