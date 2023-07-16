require('dotenv').config()
// Create an instance of the Express application
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port

})
console.log(`\nCONNECTING TO DATABASE ${process.env.db_database}\n`);
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
      
    } else {
        console.log("\x1b[32m\nConnected to the database !\x1b[0m");
        console.log('');
    }
});

connection.on('error', (err) => {
    console.error('Database connection error: ', err);
});


module.exports = connection