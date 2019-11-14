var jobs = require("../jobs");
var db = require("../models");
var path = require("path");

module.exports = function(app){
    //Create all routes and set up the logic of those routes where required
    let currentUserID;
    //Route to display home page
    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "../views/layouts/home.html"));
        // jobs.lastWeek();
        // jobs.options();
        // jobs.matchDays();
        
        })

        app.get("/logout", function(req,res) {
            res.sendFile(path.join(__dirname, "../views/layouts/home.html"));
            
            })

    app.get("/api/standings", function(req,res){
        db.standings.findAll({
            order: [["points", "DESC"]]
        }).then(function(results){
            res.json(results);
        })
    })

    app.get("/standings", function (req, res){
        res.sendFile(path.join(__dirname, "../views/layouts/standings.html"));
    })

    //APIs so that user can pick games of the week
    app.get("/pickGames", function(req, res){
        jobs.options();
        res.sendFile(path.join(__dirname, "../views/layouts/pickGames.html"));
    })

    app.post('/api/pickGames', function(req,res){
        jobs.lastWeek();
        db.picks.create({
            user: req.body.user,
            matchDay: req.body.matchday,
            pick1: req.body.pick1,
            pick2: req.body.pick2,
            pick3: req.body.pick3,
        }).then(function(result){
            res.json(result);
        });
    })

    app.get("/api/pickGames", function(req, res){
        db.currentOption.findAll()
        .then(function(results){
            res.json(results);
        })
    });
    //APIs used to calculate points
    app.get('/api/getPicks', function(req, res){
        jobs.options();
        db.picks.findAll()
        .then(function(results){
            res.json(results);
        })
    })

    //API to delete picks
    app.delete("/api/deletePicks", function(req, res){
        db.picks.destroy({ truncate: true })
        .then(function(){
            res.status(204).end();
        })
    })

    app.post('/api/compileResults',function(req,res){
        db.results.create({
            user: req.body.user,
            matchDay: req.body.matchDay,
            pick1: req.body.pick1,
            pick1points: req.body.pick1points,
            pick2: req.body.pick2,
            pick2points: req.body.pick2points,
            pick3: req.body.pick3,
            pick3points: req.body.pick3points,
            totalPoints: req.body.totalPoints,
        }).then(function(result){
            res.json(result);
        });
    })

    //API to get cumulative results to create standings
    app.get("/api/pickResults", function(req, res){
        db.results.findAll()
        .then(function(results){
            res.json(results);
        })
    })


    //API to get scores by team
    app.get('/api/getScores', function(req, res){
        db.lastweek.findAll()
        .then(function(results){
            res.json(results);
        })
    })


    app.get("/api/users", function(req, res){
        db.users.findAll()
        .then(function(results){
            res.json(results);
        })
    })

    app.get("/api/users/:name", function(req,res){
        console.log(req.params.users);
        db.users.findAll({
            where: {
                name: req.params.name
            }
        })
        .then(function(results){
            res.json(results);
        })
    })

    //route to display login


    //route to register a new user
    app.post("/api/newUser", function(req,res){
        db.users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }).then(function(result){
            res.json(result);
        });

        db.standings.create({
            name: req.body.name,
            points: 0,           
        })
    });

}

