// const Sequelize = require("sequelize");
// const sequelize = require("../config/connection.js");
// const matchday = require("./whichMatchDay");
// var express = require("express");
// require('dotenv').config();
// var db = require("../models");
// var match = require("../models/matchDays.js")


// const matchdayINT = parseInt(matchday);
// const lastMatchDayINT = matchdayINT -1;
// const lastMatchDay = String(lastMatchDayINT)

module.exports = function updateMatches(){
    console.log("function matchDays is running");
    const Sequelize = require("sequelize");
    const sequelize = require("../config/connection.js");
    const matchday = require("./whichMatchDay");
    var express = require("express");
    require('dotenv').config();
    var db = require("../models");
    const axios = require("axios");


    const matchdayINT = parseInt(matchday);
    const lastMatchDayINT = matchdayINT -1;
    const lastMatchDay = String(lastMatchDayINT)

    
    
    //query for last match day on database
    
        db.match.count()
        .then((res)=>{
            console.log(res);
            let maxId =parseInt(res);
            console.log("maxId: ");
            console.log(maxId);
            db.match.findAll({
                where: {id: maxId}
            }).then((res2)=>{
                let maxDate = res2[0].dataValues.matchday;
                let maxDateInt = parseInt(maxDate);
                console.log("maxDate: ")
                console.log(maxDate);
                console.log(maxDateInt);
                console.log(lastMatchDayINT);
        
    
    //if the date has passed so that it needs to be updatd, update table
                if (lastMatchDayINT>maxDateInt){
                    axios({
                        "method":"GET",
                        "url":"https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague",
                        "headers":{
                        "content-type":"application/octet-stream",
                        "x-rapidapi-host": process.env.API_HOST,
                        "x-rapidapi-key": process.env.API_KEY
                        },"params":{
                        "matchday": lastMatchDay
                        }
                    })
                    .then((response)=>{
                        for( let i=0; i<response.data.matches.length; i++){
                            db.match.create(   
                            {
                                matchday: lastMatchDay,
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
                    }); 
                    
                } else { console.log("No need to update matchday")}   
        })
    })           
            
}













