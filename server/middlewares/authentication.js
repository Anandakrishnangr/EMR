var app = require('express')()
let jwt = require("jsonwebtoken")

module.exports.ProtectedRoutes = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    console.log('object');
    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Assuming "Bearer {token}"
        console.log(token);
        jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.send(500)
            }
            console.log(decoded);
            next()
        }
        )
    } else {
        return res.send(401)
    }
}