const Sequelize = require("sequelize");
const connection = require("../config/connection.js");
const axios = require("axios");
const matchday = require("./whichMatchDay");
require('dotenv').config();

const matchdayINT = parseInt(matchday);
const lastMatchDayINT = matchdayINT -1;
const lastMatchDay = String(lastMatchDayINT);



let LastWeek = connection.define("lastweek",{
    matchday: Sequelize.STRING,
    date: Sequelize.STRING,
    team1: Sequelize.STRING,
    team1score: Sequelize.INTEGER,
    team2: Sequelize.STRING,
    team2score: Sequelize.INTEGER,
});

LastWeek.truncate();
// connection.get("/", function(req,res){

// })

connection.sync().then(function(){
    axios({
        "method":"GET",
        "url":"https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": "e4bd1d4763mshbadb182061cbec8p14ada1jsna099cc6dbfa1"
        },"params":{
        "matchday": lastMatchDay
        }
        })
        .then((response)=>{
          for( let i=0; i<response.data.matches.length; i++){
            LastWeek.create(   
              {
                matchday: lastMatchDay,
                date: response.data.matches[i].when,
                team1: response.data.matches[i].team1.teamName,
                team1score: response.data.matches[i].team1.teamScore,
                team2: response.data.matches[i].team2.teamName,
                team2score: response.data.matches[i].team2.teamScore,
              });
          }
          connection.end();
        })
        .catch((error)=>{
          console.log(error)
        })

});

module.exports = LastWeek;