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
 * Returns an array of Instagram photos for each day
 *
 * @param {object} top Type of top 25 days to use. Use either 'HotDays'
 * or 'ColdDays'.
 */
var Photos = function (top) {
  for (var i = 0; i < top.length; i++) {
    var temp = top[i].temp_rounded,
        minTimestamp = top[i].timestamp,
        maxTimestamp = minTimestamp + 86400;
  }
};
