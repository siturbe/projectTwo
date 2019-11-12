require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const pug = require('pug');
// var exphbs = require("express-handlebars");
var axios = require("axios");

var db = require("./models");
var jobs = require("./jobs");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Set Handlebars, but need to change to PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Routes
require("./controllers/controller.js")(app);



// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/

  db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });



