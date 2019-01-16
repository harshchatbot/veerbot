
express = require('express'),
  https = require('https'),
  request = require('request'),
  prompt = require('prompt'),
  readline = require('readline'),
  fs = require('fs');
  var app = express();







 var methods2 = {
    



    addition :  function() {



process.stdout.write('Hello World!' + '\n');








    app.get('/functions.js', function(req, res) {
        res.sendFile(__dirname + "/" + "functions.js");
    });



    app.post('/webhook', function(req, res){
        response = {
            first_name : req.query.first_name,
            last_name : req.query.last_name,
            gender: req.query.gender
            };




            console.log(response);



            res.end(JSON.stringify(response));
    });




    var server = app.listen(8888, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log("Example app listening at http://%s:%s", host, port);


    });










}

              
    
};

console.log(methods2.addition()); 

module.exports = methods2;