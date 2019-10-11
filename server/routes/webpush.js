const webPush = require('web-push');
const config = require('config');

const express = require('express');
const router = express.Router();

const publicKey = "BJ56SiiWKsOytzDkAMsw3DwuoUBV3KLTAkeQr6uWLKmYqmqjmHkj5z8u3jiFImoDv5c3Nk869AfgWwdgmV1TrOY";
const privateKey = "2ChVNxdod1VEyE_BM8bK_ePcwSfJkOgqC-ygU0j6eK4";

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

module.exports = router;
