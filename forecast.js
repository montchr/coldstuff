var fs = require('fs');

// dotenv
// for the super secrets
var dotenv = require('dotenv');
dotenv.load();

// Forecast.io setup
var Forecast = require('forecast.io');
var options = {
  APIKey: process.env.FORECAST_KEY
};

var Weather = new Forecast(options);

Weather.requestTimeout = null;

// #phillystyle
var lat = 39.952247,
    lng = -75.163894;

var startTime = 788918400, // 1995-01-01
    endTime = 1396310400, // 2014-04-01
    time = startTime;


/**
 * Write file
 * @param  {string} filename
 * @param  {mixed} data
 */
var writeFile = function (filename, data) {
  fs.writeFile(filename, data, 'utf8', function(e) {
    if (e) throw e;
    console.log(filename + ' written!');
  });
};


/**
 * mkdir wrapper function
 * @param  {string} d The directory to create
 * @param {integer} p The directory permissions
 */
var mkdir = function (d,p) {
  fs.mkdir(d, p, function(e){
    if (fs.readdir(d, function (e,f) {
      if (e) throw e;
    })) return;
    if (e) throw e;
  });
};


/**
 * Add leading zero to integer if it's less than 10
 * @param {integer} n An integer
 */
var addZero = function (n) {
  return n < 10 ? '0' + n : '' + n;
};


var formatTime = function (timestamp) {
  var time = new Date(timestamp * 1000),
      year = time.getUTCFullYear(),
      month = addZero(time.getUTCMonth() + 1),
      day = addZero(time.getUTCDate()),
      date = year + '-' + month + '-' + day;
  return date;
};


var getTheWeather = function (lat, lng, time) {
  Weather.getAtTime(lat, lng, time, function (err, res, data) {
    if (err) throw err;
    var filename = './responses/' + formatTime(time) + '.json';
    writeFile(filename, JSON.stringify(data));
    // console.log('created ' + filename);
  });
};






// mkdir('./responses', 0755);

while (time < endTime) {
  time = time + 86400;
  getTheWeather(lat, lng, time);
}
