const express = require('express');
const { User } = require('../models/user');
const { Team } = require('../models/teams');
const Joi = require('@hapi/joi');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let team = Team.create(req, res);
        


    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

function validate(req) {
    const schema = {
  
    };
  
    return Joi.validate(req, schema);
}

module.exports = router;