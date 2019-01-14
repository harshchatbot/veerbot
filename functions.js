
  express = require('express'),
  https = require('https'),
  request = require('request'),
  YQL = require('yql'),
  readline = require('readline'),
  fs = require('fs');






// i have created a method here which will call all my functions


var methods = {



addition: function(answer1,answer2) {


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    null : null
});




	rl.question('Please enter the first number : ', (answer1) => {
		
	
    rl.question('Please enter the second number : ', (answer2) => {


        var result = (+answer1) + (+answer2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
        process.exit(0);
        console.log(result);
        return `The sum of above two numbers is ${result}`;
        

});
    
    });


 


},


nasaapi: function(result){

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
let data = '';
// A chunk of data has been recieved.
resp.on('data', (chunk) => {
data += chunk;
});
// The whole response has been received. Print out the result.
resp.on('end', () => {
	var result = JSON.parse(data);
console.log(result);
return 'Message from Nasa   ' + JSON.stringify(result);
});


}).on("error", (err) => {
console.log("Error: " + err.message);
return('Try after sometime');
});



},



techfi: function(){

return('www.techfi.club'); 

},


timestamp: function() {
	var myObj = 'Math.floor(Date.now() / 1000)';
	//var myJSON = JSON.stringify(myObj);
		console.log('m in timestamp function');
		// working fine and returning below value of time to fb chatbot
		return "Sure...Current Time in Unix Timestamp is:  " +  Math.floor(Date.now() / 1000);
	},
	currentDate: function() {
		console.log('m in currentdate function');
		console.log('Current Date is: ' + new Date().toISOString().slice(0, 10));
		return 'Current Date is: ' + new Date().toISOString().slice(0, 10);
	},


/*


writetofile: function() {

	fs.writeFileSync('C:/Users/Pragya/Desktop/harsh.js', 'Hello harsh!'); 
console.log(fs.readFileSync('C:/Users/Pragya/Desktop/harsh.js').toString()); 
console.log('m in write to file function');
},


*/

 currenttime: function(recipientId) {
  var messageData = {
  	type: "RESPONSE",
    recipient: {
      id: recipientId
    },
    message: {
       "text":"hello, world!"
        
       
      
    }
  }
  console.log('m in current time function');

},







};
	


console.log("m in function.js"); 

// In order that we can use these functions in other files (in our example is calladd.js), we need to add at the end of addition.js following code
//	exports.data = methods;  instead of this we can use

module.exports = methods;
