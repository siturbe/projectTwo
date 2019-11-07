var express = require("express");
var router = express.Router();

var db = require("../models");

module.exports = function(router){
    //Create all routes and set up the logic of those routes where required
    //Route to display home page
    router.get("/", function(req,res){
        db.all(function(data){
            var hbsObject = {
                matches: data
            };
            res.render("index", hbsObject);
        });
    });

    //route to display login


    //route to post login

    //route to display standings

    //route to display week's matches

    //route to post users choices

    //route to display results of choices post matches

    router.post("/api/matches", function (req,res){
        matches.create([""])
    })

}
