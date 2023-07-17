

var express = require('express')
var app = express()
app.use(express.json());
const multer = require('multer')()
// Controller Starts
app.post('/registerDoctor', multer.array('file'), (req, res) => {
  console.log(req.body);
  const { Email, LastName, FirstName, Gender, Address, MobileNo, Experience, Age } = req.body.data;
  return
  // Construct the SQL query
  const sql = `INSERT INTO users (Email, LastName, FirstName, Gender, Address, MobileNo, Experience, Age )
   VALUES ('${Email}', '${LastName}', '${FirstName}', '${Gender}', '${Address}', '${MobileNo}', '${Experience}', '${Age}')`;

  // Execute the SQL query
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing the query:', err);
      res.status(500).send('Error executing the query');
      return;
    }
    console.log('User inserted successfully');
    res.status(200).send('User inserted successfully');
  });
})


module.exports = app