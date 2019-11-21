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


  db.currentOption.truncate().then(function(){
      axios({
          "method":"GET",
          "url":"https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague",
          "headers":{
          "content-type":"application/octet-stream",
          "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
          "x-rapidapi-key": "e4bd1d4763mshbadb182061cbec8p14ada1jsna099cc6dbfa1"
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