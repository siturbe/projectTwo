const Sequelize = require("sequelize");
const connection = require("../config/connection.js");

let Match = connection.define("match",{
    matchday: Sequelize.STRING,
    date: Sequelize.STRING,
    team1: Sequelize.STRING,
    team1score: Sequelize.INTEGER,
    team2: Sequelize.STRING,
    team2score: Sequelize.INTEGER,
});

Match.sync();

module.exports = Match;













