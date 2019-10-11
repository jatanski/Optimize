const express = require('express');
const bodyParser = require('body-parser');
const error = require('../middleware/error');
const usersRoute = require('../routes/users');
const loginRouter = require('../routes/login');
const threadsRoute = require('../routes/threads');
const webpushRouter = require('../routes/webpush');
const teamsRouter = require('../routes/teams');

module.exports = function (app) {

    app.use(express.json());

    app.use('/api/users', usersRoute);
    app.use('/api/threads', threadsRoute);
    app.use('/api/login', loginRouter);
    app.use('/api/subscribe', webpushRouter);
    app.use('/api/teams', teamsRouter);

};