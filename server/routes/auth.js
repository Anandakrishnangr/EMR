var app = require('express')()
const connection = require('../config/db_connection')
let bcrypt = require('bcrypt')
let jwt = require("jsonwebtoken")
const { ProtectedRoutes } = require('../middlewares/authentication')

app.post('/login', (req, res) => {
  let { username, password } = { ...req.body }
  console.log({ username, password });
  let pass = bcrypt.hashSync(password, 10)
  console.log(pass);
  connection.query(`select * from login where username="${username}" `, (error, result) => {
    if (result.length) {
      result = JSON.parse(JSON.stringify(result))
      let data = result[0]
      if (bcrypt.compareSync(password, data.password) == false) {
        return res.status(400).send("Password does not match !")
      }
      delete data.password
      const options = {
        expiresIn: '30d',
      };
      const token = jwt.sign(data, process.env.jwt_secret, options);
      return res.send({ token, username: data.username,role:data.role })
    } else {
      return res.status(400).send("User not found !")

    }

  })
})

app.get('/fetchUser',ProtectedRoutes,(req,res,next)=>{
res.send(200)

})
module.exports = app