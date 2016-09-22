function server (cb) {
  const request = require('request');
  const LOCATION = '107123';
  const API_KEY = '8B8FggUEtfoxQeE8v8Y90CRZ0zSv9veo';
  const ACCU = 'http://dataservice.accuweather.com/currentconditions/v1/' + LOCATION + '?apikey='+ API_KEY;

  request(ACCU, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result = JSON.parse(body);
      cb(null, result[0]['WeatherText']);
    } else {
      cb(true, 'error');
    }
  });
}
module.exports = server;
