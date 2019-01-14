var another = require('./functions.js');

//var numbersadd = require('./numbersadd.js');

var weather = require('./yahooweather.js');

// this another showss number of functions in your addition.js file
console.log(another)
//console.log(numbersadd)

/*

// this is the way to call function when we have defined  exports.data = methods;
another.data.timestamp();
another.data.currentDate();
another.data.addition();
*/

// but when we have defined module.exports = methods;



another.timestamp();
another.currentDate();
another.addition();
//another.writetofile();
another.currenttime();
// another.weather();

//another.nasaapi();
another.techfi();
weather.YahooWeather();

//numbersadd.addition();



