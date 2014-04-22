// dotenv
// for the super secrets
var dotenv = require('dotenv');
dotenv.load();

// foursquare credentials
// use dotenv
var clientId = process.env.FOURSQUARE_CLIENT_ID,
    clientSecret = process.env.FOURSQUARE_CLIENT_SECRET,
    oAuthToken = process.env.FOURSQUARE_OAUTH_TOKEN;

// node-foursquare configuration
var config = {
  'secrets' : {
    'clientId': clientId,
    'clientSecret': clientSecret,
    'redirectUrl': 'https://github.com/montchr/coldstuff'
  }
};

// requirements
var fs = require('fs');
var foursquare = require('node-foursquare')(config);

// custom variables


fs.readFile('./venues.json', 'utf8', function (err, d) {
  if (err) throw err;
  var venues = JSON.parse(d);
  venues.forEach(function(venue) {
    getStats(venue.id, [1232150400, 1232236800], oAuthToken, function (err, d) {
      if (err) throw err;
      console.log(d);
    });
  });
});
