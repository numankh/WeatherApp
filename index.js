const request = require('request');
const argv = require('yargs').argv;

let config = require('./config.js');
let apiKey = config.keys.WEATHER_API_KEY;

// user can enter city from command line: node index.js -c Boston
let city = argv.c || 'centreville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});