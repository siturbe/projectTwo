//File used to populate data of games that already happened
require('dotenv').config();
const axios = require("axios");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST2,
  port: 3306,
  user: process.env.MYSQL_USER2,
  password: process.env.MYSQL_KEY2,
  database: process.env.MYSQL_DBNAME2
});

connection.connect(function(err){
  if (err) throw err;
  getMatchDay();
});


let allMatches=[];
let matchday="10";

function getMatchDay(){
  axios({
    "method":"GET",
    "url":"https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host": process.env.API_HOST,
    "x-rapidapi-key": process.env.API_KEY
    },"params":{
    "matchday": matchday
    }
    })
    .then((response)=>{
      // console.log(response.data)
      // console.log(response.data.matches[1].when)
      // console.log(response.data.matches[1].team1)
      for( let i=0; i<response.data.matches.length; i++){
        connection.query("INSERT INTO matches SET ?", 
          {
            matchday: matchday,
            date: response.data.matches[i].when,
            team1: response.data.matches[i].team1.teamName,
            team1score: response.data.matches[i].team1.teamScore,
            team2: response.data.matches[i].team2.teamName,
            team2score: response.data.matches[i].team2.teamScore,
          },
          function(err, response){
            console.log(response.affectedRows + " matches inserted.\n");
          }
        )
        
      }
      connection.end();
    })
    .catch((error)=>{
      console.log(error)
    })
}
