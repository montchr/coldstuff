// dotenv
// for the super secrets
var dotenv = require('dotenv');
dotenv.load();

// instagram credentials
// use dotenv
var clientId = process.env.INSTAGRAM_CLIENT_ID,
    clientSecret = process.env.INSTAGRAM_CLIENT_SECRET;

var Instagram = require('instagram-node-lib');

Instagram.set('client_id', clientId);
Instagram.set('client_secret', clientSecret);

// 1. Read timestamp from each object in temp-20140401-20130401.json
// 2.

var startTime     = 1364774400, // Mon, 01 Apr 2013 00:00:00 GMT
    endTime       = 1396224000, // Mon, 31 Mar 2014 00:00:00 GMT
    minTimestamp  = 0,
    maxTimestamp  = 0;


var dayEnd = function (begin) {
  var end = begin + 86400;
  return end;
};

while (maxTimestamp < endTime) {

}
