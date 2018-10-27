
  express = require('express'),
  https = require('https'),
  request = require('request'),
  fs = require('fs');




// i have created a method here which will call all my functions


var methods = {






timestamp: function() {
		console.log('Current Time in Unix Timestamp: ' + Math.floor(Date.now() / 1000));
	},
	currentDate: function() {
		console.log('Current Date is: ' + new Date().toISOString().slice(0, 10));
	},






// addition func

addition: function(a,b) {

	//var a = '10';
	//var b = '20';

	return (+a + +b);
	
console.log('adding',addition(2,3));

},



writetofile: function() {

	fs.writeFileSync('C:/Users/Pragya/Desktop/harsh.js', 'Hello harsh!'); 
console.log(fs.readFileSync('C:/Users/Pragya/Desktop/harsh.js').toString()); 
}








};
	




// In order that we can use these functions in other files (in our example is calladd.js), we need to add at the end of addition.js following code
//	exports.data = methods;  instead of this we can use

module.exports = methods;