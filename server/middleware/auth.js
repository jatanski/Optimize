const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Acess denied. NO token provided.')

    try {
        const decoded = jwt.verify(token, "HeckatonApp_jwtPrivateKey");
        req.user = decoded;
        console.log(decoded)
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}