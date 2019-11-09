// Dependencies
require('dotenv').config();
var Sequelize = require("sequelize");
// var mysql = require("mysql");
// var connection;

// var sequelize = new Sequelize("fogv8936iu69irwm", "addn7sdrff0xty9x",  "sa68g3v186gepb2j", {
//   host: "g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   port: 3306,
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });


//Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if(process.env.JAWSDB_URL){
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.MYSQL_DBNAME2, process.env.MYSQL_USER2,  process.env.MYSQL_KEY2, {
    host: process.env.MYSQL_HOST2,
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});
}

// Exports the connection for other files to use
module.exports = sequelize;


