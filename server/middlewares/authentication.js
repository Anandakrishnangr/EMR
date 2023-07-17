var app = require('express')()
let jwt = require("jsonwebtoken")

module.exports.ProtectedRoutes = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1]; // Assuming "Bearer {token}"
        jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.send(500)
            }
            console.log(decoded);
            res.locals.user = decoded
            next()
        })
    } else {
        console.log('non autherized');
        return res.send(401)
    }
}