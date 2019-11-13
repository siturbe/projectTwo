module.exports = function calculatePoints(){
    console.log("function to calculate points is running");

    const Sequelize = require("sequelize");
    const sequelize = require("../config/connection.js");
    const matchday = require("./whichMatchDay");
    var express = require("express");
    require('dotenv').config();
    var db = require("../models");


    $.get('/api/getPicks', function(data){
        for (let i=0; data.length; i++){
            let user = data[i].user;
            let matchday = data[i].matchday;
            let pick1 = data[i].pick1;
            let pick2 = data[i].pick2;
            let pick3 = data[i].pick3

        } 
    

    })


}