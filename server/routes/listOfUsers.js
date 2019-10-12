const _ = require("lodash");
const bcrypt = require("bcrypt");
const auth = require('../middleware/auth');
const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user");

router.get('/', async (req, res) => {
    let users = await User.find({});
    res.status(200).send(users);
});

module.exports = router;
