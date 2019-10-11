const express = require('express');
const error = require('../middleware/error');
const usersRoute = require('../routes/users')

module.exports = function (app) {
    app.use(express.json());

    app.use('/api/users', usersRoute);

    app.use(error);
};