// const Sequelize = require("sequelize");
// const sequelize = require("../config/connection.js");
// const matchday = require("./whichMatchDay");
// require('dotenv').config();
// var db = require("../models");


module.exports = function populateOptions(){
  console.log("function options is running");

  const Sequelize = require("sequelize");
  const sequelize = require("../config/connection.js");
  const matchday = require("./whichMatchDay");
  require('dotenv').config();
  var db = require("../models");
  const axios = require("axios");
  const keys = require('../controllers/keys');


  db.currentOption.truncate().then(function(){
      axios({
          "method":"GET",
          "url":"https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host": keys.PLscores.host,
          "x-rapidapi-key": keys.PLscores.secret
          },"params":{
          "matchday": matchday
          }
          })
          .then((response)=>{
            for( let i=0; i<response.data.matches.length; i++){
              db.currentOption.create(   
                {
                  matchday: matchday,
                  date: response.data.matches[i].when,
                  team1: response.data.matches[i].team1.teamName,
                  team1score: response.data.matches[i].team1.teamScore,
                  team2: response.data.matches[i].team2.teamName,
                  team2score: response.data.matches[i].team2.teamScore,
                });
            }
            // sequelize.end();
          })
          .catch((error)=>{
            console.log(error)
          })

  });
}