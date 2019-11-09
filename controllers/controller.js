var jobs = require("../jobs");
var db = require("../models");

module.exports = function(app){
    //Create all routes and set up the logic of those routes where required
    //Route to display home page
    app.get("/", function(req,res) {
        //First update tables from API
        res.render("index");
        console.log(db.match);
        jobs.lastWeek();
        jobs.options();
        jobs.matchDays();
        
        })
        // jobs.matchDays;
        // jobs.lastWeek;
        // jobs.options;

        // db.all(function(data){
        //     var hbsObject = {
        //         matches: data
        //     };
        //     res.render("index", hbsObject);
        // });
        //Code to populate the options table

    };

    //route to display login


    //route to post login

    //route to display standings

    //route to display week's matches

    //route to post users choices

    //route to display results of choices post matches

    // router.post("/api/matches", function (req,res){
    //     matches.create([""])
    // })


