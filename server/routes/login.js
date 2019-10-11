const express = require('express');
const { User } = require('../models/user');
const Joi = require('@hapi/joi');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(401).send('Invalid email or password.');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');

        const token = await user.createToken();

        res.header('x-auth-token', token).send({
            _id: user._id,
            email: user.email
        });

    } catch (ex) {
        res.status(500).send(ex.message);
    }
});

function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(1024).required()
    };
  
    return Joi.validate(req, schema);
}

module.exports = router;