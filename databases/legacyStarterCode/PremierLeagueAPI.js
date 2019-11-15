var http = require("https");

var options = {
  method: "GET",
  hostname: "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
  port: null,
  path: "/api/premierleague",
  headers: {
    "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
    "x-rapidapi-key": "e4bd1d4763mshbadb182061cbec8p14ada1jsna099cc6dbfa1"
  }
};

var req = http.request(options, function(res) {
  var chunks = [];
  res.on("data", function(chunk) {
    chunks.push(chunk);
  });

  res.on("end", function() {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
