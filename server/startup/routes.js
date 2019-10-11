const express = require('express');
const error = require('../middleware/error');
const usersRoute = require('../routes/users')
const loginRouter = require('../routes/login');
const webpushRouter = require('../routes/webpush');

module.exports = function (app) {

    app.use(express.json());

    app.use('/api/users', usersRoute);

    app.use(error);

    app.use('/api/login', loginRouter);
    app.use('/api/subscribe', webpushRouter);
};