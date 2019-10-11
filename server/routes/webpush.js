const webPush = require('web-push');
const bodyParser = require('body-parser');
const config = require('config');

const express = require('express');
const router = express.Router();

const publicKey = config.get('publicVapidKey');
const privateKey = config.get('privateVapidKey');

webPush.setVapidDetails('mailto:test@test.com', publicKey, privateKey);

router.post('/subscribe', async (req, res) => {
    const subscription = req.body;

    res.status(201).send({});

    const payload = JSON.stringify({
        title: 'Test'
    });

    webPush.sendNotification(subscription, payload)
        .catch(err => console.log(err));
});
