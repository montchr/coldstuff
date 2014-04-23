var fs = require('fs');

// dotenv
// for the super secrets
var dotenv = require('dotenv');
dotenv.load();

// instagram credentials
// use dotenv
var clientId = process.env.INSTAGRAM_CLIENT_ID,
    clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;

// requirements
var HotDays = require ('./temp-hot.json'),
    ColdDays = require('./temp-cold.json');
    Instagram = require('instagram-node-lib');

// use instagram creds
Instagram.set('client_id', clientId);
Instagram.set('client_secret', clientSecret);

// #phillystyle
var lat = 39.952247,
    lng = -75.163894;

/**
 * Add leading zero to integer if it's less than 10
 * @param {integer} n An integer
 */
function addZero (n) {
  return n < 10 ? '0' + n : '' + n;
}


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
 * rmdir wrapper function
 * @param  {string} d The directory to remove
 */
var rmdir = function (d) {
  fs.rmdir(d, function(e){
    if (e) throw e;
  });
};


/**
 * Returns an array of Instagram photos for each day
 *
 * @param {object} topDays Type of top 25 days to use. Use either 'hot'
 * or 'cold'.
 */
var Photos = function (hc) {

  if (hc === 'hot') {
    topDays = HotDays;
  } else if (hc === 'cold') {
    topDays = ColdDays;
  }

  for (var i = 0; i < topDays.length; i++) {
    var minTimestamp = topDays[i].timestamp,
        maxTimestamp = minTimestamp + 86400;

    var rank = topDays[i].rank;

    // time and date
    var time = new Date(minTimestamp * 1000),
        year = time.getUTCFullYear(),
        month = addZero(time.getUTCMonth()),
        day = addZero(time.getUTCDate()),
        date = year + '-' + month + '-' + day;

    // output
    var filename = './responses/instagram-' + hc + '-' + addZero(rank) + '-' + date + '.json',
        buffer = minTimestamp + ' ' + maxTimestamp;

    writeFile(filename, buffer);
  }

};

// rmdir('./responses');
mkdir('./responses', 0777);
Photos('hot');
Photos('cold');
