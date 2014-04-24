"use strict";
var fs = require('fs');
var csv = require('json-csv');

var dir = './responses/';
var data = {};

/**
 * Write file
 * @param  {string} filename
 * @param  {mixed} data
 *
 * @todo  Move this to its own module file
 */
var writeFileSync = function (filename, data) {
  fs.writeFileSync(filename, data, 'utf8');
  console.log(filename + ' written!');
};


var fields = [
  {
    name: 'daily.data.time',
    label: 'Unix Time'
  },
  {
    name: 'daily.data.summary',
    label: 'Summary'
  },
  {
    name: 'daily.data.sunriseTime',
    label: 'Sunrise Time'
  },
  {
    name: 'daily.data.sunsetTime',
    label: 'Sunset Time'
  },
  {
    name: 'daily.data.moonPhase',
    label: 'Moon Phase'
  },
  {
    name: 'daily.data.precipIntensity',
    label: 'Precipitation Intensity'
  },
  {
    name: 'daily.data.precipIntensityMax',
    label: 'Precipitation Intensity (Max)'
  },
  {
    name: 'daily.data.precipIntensityMaxTime',
    label: 'Precipitation Intensity (Max Time)'
  },
  {
    name: 'daily.data.precipProbability',
    label: 'Precipitation Probability'
  },
  {
    name: 'daily.data.precipType',
    label: 'Precipitation Type'
  },
  {
    name: 'daily.data.temperatureMin',
    label: 'Temperature Min'
  },
  {
    name: 'daily.data.temperatureMinTime',
    label: 'Temperature Min Time'
  },
  {
    name: 'daily.data.temperatureMax',
    label: 'Temperature Max'
  },
  {
    name: 'daily.data.temperatureMaxTime',
    label: 'Temperature Max (Time)'
  },
  {
    name: 'daily.data.humidity',
    label: 'Humidity'
  },
  {
    name: 'daily.data.windSpeed',
    label: 'Wind Speed'
  },
  {
    name: 'daily.data.visibility',
    label: 'Visibility'
  }
];


var list = fs.readdirSync(dir);
var i = 0;
list.forEach(function(file) {
  i++;
  data[file] = fs.readFileSync(dir + file, 'utf8');
  // console.log(data);
  if (0===--i) {
    // csv.toCSV({
    //     data: data[file],
    //     fields: fields
    //   },
    //   function (err,csv) {
    //     if (err) throw err;
    //     // writeFileSync('./csv/' + file + '.csv', csv);
    //     console.log(csv);
    //   }
    // );
  }
});

data = {
  "latitude": 39.952247,
  "longitude": -75.163894,
  "timezone": "America/New_York",
  "offset": -5,
  "currently": {
    "time": 789004800,
    "summary": "Partly Cloudy",
    "icon": "partly-cloudy-night",
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 44.43,
    "apparentTemperature": 41.62,
    "dewPoint": 41.74,
    "humidity": 0.9,
    "windSpeed": 5.09,
    "windBearing": 217,
    "visibility": 7.14,
    "cloudCover": 0.48,
    "pressure": 1012.38
  },
  "hourly": {
    "summary": "Light rain until night, starting again in the morning.",
    "icon": "rain",
    "data": [
      {
        "time": 788936400,
        "summary": "Light Rain",
        "icon": "rain",
        "precipIntensity": 0.0237,
        "precipProbability": 1,
        "precipType": "rain",
        "temperature": 36.2,
        "apparentTemperature": 31.44,
        "dewPoint": 35.29,
        "humidity": 0.96,
        "windSpeed": 5.72,
        "windBearing": 64,
        "visibility": 4.76,
        "cloudCover": 1,
        "pressure": 1020.31
      },
      {
        "time": 788940000,
        "summary": "Light Rain",
        "icon": "rain",
        "precipIntensity": 0.0363,
        "precipProbability": 1,
        "precipType": "rain",
        "temperature": 36.26,
        "apparentTemperature": 31.24,
        "dewPoint": 35.68,
        "humidity": 0.98,
        "windSpeed": 6.1,
        "windBearing": 62,
        "visibility": 2.44,
        "cloudCover": 1,
        "pressure": 1018.78
      },
      {
        "time": 788943600,
        "summary": "Light Rain",
        "icon": "rain",
        "precipIntensity": 0.01,
        "precipProbability": 1,
        "precipType": "rain",
        "temperature": 36.65,
        "apparentTemperature": 32.64,
        "dewPoint": 35.55,
        "humidity": 0.96,
        "windSpeed": 4.88,
        "windBearing": 54,
        "visibility": 2.32,
        "cloudCover": 1,
        "pressure": 1017.31
      },
      {
        "time": 788947200,
        "summary": "Foggy",
        "icon": "fog",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 37.65,
        "apparentTemperature": 37.65,
        "dewPoint": 36.54,
        "humidity": 0.96,
        "windSpeed": 2.96,
        "windBearing": 15,
        "visibility": 1.14,
        "cloudCover": 1,
        "pressure": 1015.59
      },
      {
        "time": 788950800,
        "summary": "Light Rain",
        "icon": "rain",
        "precipIntensity": 0.0337,
        "precipProbability": 1,
        "precipType": "rain",
        "temperature": 36.95,
        "apparentTemperature": 31.17,
        "dewPoint": 36.95,
        "humidity": 1,
        "windSpeed": 7.47,
        "windBearing": 319,
        "visibility": 1.28,
        "cloudCover": 1,
        "pressure": 1014.7
      },
      {
        "time": 788954400,
        "summary": "Light Rain",
        "icon": "rain",
        "precipIntensity": 0.0282,
        "precipProbability": 1,
        "precipType": "rain",
        "temperature": 37.76,
        "apparentTemperature": 30.9,
        "dewPoint": 37.76,
        "humidity": 1,
        "windSpeed": 9.92,
        "windBearing": 337,
        "visibility": 2.24,
        "cloudCover": 1,
        "pressure": 1014.36
      },
      {
        "time": 788958000,
        "summary": "Light Rain",
        "icon": "rain",
        "precipIntensity": 0.0163,
        "precipProbability": 0.82,
        "precipType": "rain",
        "temperature": 37.45,
        "apparentTemperature": 37.45,
        "dewPoint": 35.66,
        "humidity": 0.93,
        "windSpeed": 2.12,
        "windBearing": 54,
        "visibility": 5.3,
        "cloudCover": 1,
        "pressure": 1013.19
      },
      {
        "time": 788961600,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 37.36,
        "apparentTemperature": 37.36,
        "dewPoint": 34.88,
        "humidity": 0.91,
        "visibility": 5.55,
        "cloudCover": 1,
        "pressure": 1012.59
      },
      {
        "time": 788965200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 37.36,
        "apparentTemperature": 33.34,
        "dewPoint": 35.12,
        "humidity": 0.92,
        "windSpeed": 5.04,
        "windBearing": 293,
        "visibility": 5.77,
        "cloudCover": 0.75,
        "pressure": 1012.72
      },
      {
        "time": 788968800,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 37.4,
        "apparentTemperature": 31.92,
        "dewPoint": 35.63,
        "humidity": 0.93,
        "windSpeed": 7.14,
        "windBearing": 246,
        "visibility": 6.98,
        "cloudCover": 0.85,
        "pressure": 1013.56
      },
      {
        "time": 788972400,
        "summary": "Overcast",
        "icon": "cloudy",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 40.64,
        "apparentTemperature": 35.65,
        "dewPoint": 39.99,
        "humidity": 0.98,
        "windSpeed": 7.45,
        "windBearing": 226,
        "visibility": 7.87,
        "cloudCover": 1,
        "pressure": 1013.74
      },
      {
        "time": 788976000,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 43.6,
        "apparentTemperature": 38.08,
        "dewPoint": 41.38,
        "humidity": 0.92,
        "windSpeed": 10.06,
        "windBearing": 249,
        "visibility": 7.9,
        "cloudCover": 0.88,
        "pressure": 1013.04
      },
      {
        "time": 788979600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 44.65,
        "apparentTemperature": 40.31,
        "dewPoint": 43.11,
        "humidity": 0.94,
        "windSpeed": 7.88,
        "windBearing": 234,
        "visibility": 6.19,
        "cloudCover": 0.75,
        "pressure": 1012.24
      },
      {
        "time": 788983200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 47.67,
        "apparentTemperature": 43.45,
        "dewPoint": 43.87,
        "humidity": 0.87,
        "windSpeed": 9.18,
        "windBearing": 255,
        "visibility": 8.08,
        "cloudCover": 0.31,
        "pressure": 1011.8
      },
      {
        "time": 788986800,
        "summary": "Clear",
        "icon": "clear-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 49.76,
        "apparentTemperature": 46.05,
        "dewPoint": 45.67,
        "humidity": 0.86,
        "windSpeed": 9.11,
        "windBearing": 250,
        "visibility": 9.36,
        "cloudCover": 0.24,
        "pressure": 1011.56
      },
      {
        "time": 788990400,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 51.54,
        "apparentTemperature": 51.54,
        "dewPoint": 45.13,
        "humidity": 0.79,
        "windSpeed": 6.61,
        "windBearing": 238,
        "visibility": 9.36,
        "cloudCover": 0.31,
        "pressure": 1011.84
      },
      {
        "time": 788994000,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-day",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 49.48,
        "apparentTemperature": 46.85,
        "dewPoint": 45.09,
        "humidity": 0.85,
        "windSpeed": 6.39,
        "windBearing": 205,
        "visibility": 9.26,
        "cloudCover": 0.51,
        "pressure": 1012.14
      },
      {
        "time": 788997600,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 48.1,
        "apparentTemperature": 44.93,
        "dewPoint": 43.45,
        "humidity": 0.84,
        "windSpeed": 6.94,
        "windBearing": 232,
        "visibility": 7.29,
        "cloudCover": 0.8,
        "pressure": 1012.5
      },
      {
        "time": 789001200,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 45.58,
        "apparentTemperature": 42.95,
        "dewPoint": 43.26,
        "humidity": 0.92,
        "windSpeed": 5.13,
        "windBearing": 230,
        "visibility": 6.72,
        "cloudCover": 0.31,
        "pressure": 1012.53
      },
      {
        "time": 789004800,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 44.43,
        "apparentTemperature": 41.62,
        "dewPoint": 41.74,
        "humidity": 0.9,
        "windSpeed": 5.09,
        "windBearing": 217,
        "visibility": 7.14,
        "cloudCover": 0.48,
        "pressure": 1012.38
      },
      {
        "time": 789008400,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 43.09,
        "apparentTemperature": 39.52,
        "dewPoint": 40.8,
        "humidity": 0.92,
        "windSpeed": 5.87,
        "windBearing": 213,
        "visibility": 6.1,
        "cloudCover": 0.31,
        "pressure": 1012.29
      },
      {
        "time": 789012000,
        "summary": "Clear",
        "icon": "clear-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 42.15,
        "apparentTemperature": 39.56,
        "dewPoint": 41.49,
        "humidity": 0.97,
        "windSpeed": 4.29,
        "windBearing": 229,
        "visibility": 4.62,
        "cloudCover": 0.06,
        "pressure": 1012.07
      },
      {
        "time": 789015600,
        "summary": "Partly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 41.28,
        "apparentTemperature": 38.26,
        "dewPoint": 40.62,
        "humidity": 0.97,
        "windSpeed": 4.64,
        "windBearing": 243,
        "visibility": 3.42,
        "cloudCover": 0.25,
        "pressure": 1011.2
      },
      {
        "time": 789019200,
        "summary": "Mostly Cloudy",
        "icon": "partly-cloudy-night",
        "precipIntensity": 0,
        "precipProbability": 0,
        "temperature": 41.11,
        "apparentTemperature": 38.36,
        "dewPoint": 40.85,
        "humidity": 0.99,
        "windSpeed": 4.27,
        "windBearing": 224,
        "visibility": 2.72,
        "cloudCover": 0.78,
        "pressure": 1010.16
      }
    ]
  },
  "daily": {
    "data": [
      {
        "time": 788936400,
        "summary": "Light rain in the morning.",
        "icon": "rain",
        "sunriseTime": 788963018,
        "sunsetTime": 788996826,
        "moonPhase": 0.02,
        "precipIntensity": 0.0062,
        "precipIntensityMax": 0.0363,
        "precipIntensityMaxTime": 788940000,
        "precipProbability": 1,
        "precipType": "rain",
        "temperatureMin": 36.2,
        "temperatureMinTime": 788936400,
        "temperatureMax": 51.54,
        "temperatureMaxTime": 788990400,
        "apparentTemperatureMin": 30.9,
        "apparentTemperatureMinTime": 788954400,
        "apparentTemperatureMax": 51.54,
        "apparentTemperatureMaxTime": 788990400,
        "dewPoint": 39.81,
        "humidity": 0.93,
        "windSpeed": 3.49,
        "windBearing": 251,
        "visibility": 5.57,
        "cloudCover": 0.69,
        "pressure": 1013.44
      }
    ]
  },
  "flags": {
    "sources": [
      "isd"
    ],
    "isd-stations": [
      "724080-13739",
      "724085-94732",
      "724086-14793",
      "724089-13781",
      "724095-14792"
    ],
    "units": "us"
  }
}

csv.toCSV({
    data: data,
    fields: fields
  },
  function (err,csv) {
    if (err) throw err;
    writeFileSync('./csv/' + 'test' + '.csv', csv);
    console.log(csv);
  }
);
