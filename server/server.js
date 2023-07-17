const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config()
var bodyParser = require("body-parser");
let accountRoutes = require('./routes/accounts')
let authRoutes = require('./routes/auth')
const cookieParser = require('cookie-parser');
let userRoute = require('./routes/user')

app.use(bodyParser.json({ limit: "50mb" }));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public")));
// PUBLIC PATH

app.use(cookieParser());
// Define a route
let i = 1
app.get('/', (req, res) => {

  res.send('Hello, world!');
});

app.use('/auth', authRoutes)
app.use('/user',userRoute)
app.use('/register',accountRoutes)
// Start the server

app.listen(process.env.server_port, () => {
  console.log(`Server is listening on port ${process.env.server_port}`);
});