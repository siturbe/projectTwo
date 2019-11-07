//File used to populate data of games that already happened

const axios = require("axios");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'premierLeague_db'
});

connection.connect(function(err){
  if (err) throw err;
  getMatchDay();
});


let allMatches=[];
let matchday="38";

function getMatchDay(){
  axios({
    "method":"GET",
    "url":"https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
    "x-rapidapi-key":"e4bd1d4763mshbadb182061cbec8p14ada1jsna099cc6dbfa1"
    },"params":{
    "matchday": matchday
    }
    })
    .then((response)=>{
      // console.log(response.data)
      // console.log(response.data.matches[1].when)
      // console.log(response.data.matches[1].team1)
      for( let i=0; i<response.data.matches.length; i++){
        connection.query("INSERT INTO matchestest SET ?", 
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
