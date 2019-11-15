// Dependencies
require('dotenv').config();
var Sequelize = require("sequelize");
// var mysql = require("mysql");
// var connection;

var sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER,  process.env.MYSQL_KEY, {
  host: process.env.MYSQL_HOST,
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


//Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// if(process.env.JAWSDB_URL){
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER,  process.env.MYSQL_KEY, {
//     host: process.env.MYSQL_HOST,
//     port: 3306,
//     dialect: "mysql",
//     pool: {
//       max: 5,
//       min: 0,
//       idle: 10000
//     }
// });
// }

// Exports the connection for other files to use
module.exports = sequelize;


