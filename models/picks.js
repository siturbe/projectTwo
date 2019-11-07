const Sequelize = require("sequelize");
const connection = require("../config/connection.js");

let Picks = connection.define("match",{
    user: Sequelize.STRING,
    matchday: Sequelize.STRING,
    date: Sequelize.STRING,
    team1: Sequelize.STRING,
    team1margin: Sequelize.INTEGER,
    team2: Sequelize.STRING,
    team2margin: Sequelize.INTEGER,
    team3: Sequelize.STRING,
    team3margin: Sequelize.INTEGER
});

Picks.sync();

module.exports = Picks;