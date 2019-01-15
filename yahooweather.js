"use strict";

const 
express = require('express'),
  https = require('https'),
  request = require('request'),
  
  fs = require('fs');

var method = {

YahooWeather: function(){

console.log('m in weather function');



var timestamp = new Date().getTime() / 1000;






var request = require("request");

var options = { method: 'GET',
  url: 'https://graph.facebook.com/me',
  qs: { access_token: 'EAAWrrTFtaVcBAAL2e1rUJqlMT9T0T5mbPGHTxak1CIyyB6iSrtoABUH8oZAxCA4J6VTuKZCpbQ2LeV45Wer9ScKrorgMFoClq05ynBWRyqTUFDmOLTxJfcKRuKueCp1ckAwohWTUi88MZAlcK4ibTcQzDFtsAYNwRld6UF3zAZDZD' },
  headers: 
   { //'Postman-Token': '51a15e0d-4837-4757-b967-5d2124d33b04',
     'cache-control': 'no-cache' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
  return (body.toString());
});





/*



var options = { method: 'GET',
  url: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',
  qs: { location: 'sunnyvale,ca', format: 'json' },
  headers: 
   { //'Postman-Token': '1ddc0211-fb9c-4fc7-93ea-8331ca81a255',
     'cache-control': 'no-cache',
     Authorization: 'OAuth oauth_consumer_key="dj0yJmk9Y2pYYkJNVWJDWmpZJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWEx",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1547486712",oauth_nonce="ZBp3DrXFbfG",oauth_version="1.0",oauth_signature="75XgL8n3nPTCj1WjSqU%2BAB2TtJ4%3D"' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
var body_string = JSON.parse(body);
var location = JSON.stringify(body_string.location);
var forecasts = JSON.stringify(body_string.forecasts);
console.log('City details        ' + location + '        forecasts        ' + forecasts);
  //console.log(JSON.stringify(body_string.location),JSON.stringify(body_string.current_observation));
  return ('City details        ' + location + '        forecasts        ' + forecasts);
  
});


*/






}
};


module.exports = method;
