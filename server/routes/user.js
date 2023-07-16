var app = require('express')()
var authenticationMiddleware = require('../middlewares/authentication')
app.use(authenticationMiddleware.ProtectedRoutes)

app.get('/check', (req, res) => {

    console.log('object');
    res.send()
})

module.exports = app