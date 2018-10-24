/*
const { Pool, Client } = require('pg')
const connectionString = 'postgres://qokezostymfzhl:4b68816ad2118d0a9945afe846ff1a6704425ac891976b5a3162d4c8969fe149@ec2-54-83-3-101.compute-1.amazonaws.com:5432/dabdf4hps4beb'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect('SELECT NOW()', (err, res) => {
console.log(err,res)
})

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
*/


var express = require('express');
var pg = require("pg");
var app = express();
var http = require('http');

/*

var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hey, this is a response from a server!\n");
});
server.listen(1212); // listening on port 1212

*/

 
var connectionString = "postgres://qokezostymfzhl:4b68816ad2118d0a9945afe846ff1a6704425ac891976b5a3162d4c8969fe149@ec2-54-83-3-101.compute-1.amazonaws.com:5432/dabdf4hps4beb";
 
app.get('/', function (req, res, next) {
    pg.connect(connectionString,function(err,client,done) {
       if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
       client.query('SELECT * FROM chatdata where userid = 3', [1],function(err,result) {
       	if (err) throw err;
    	console.log(result);
       	
           done(); // closing the connection;
           if(err){
               console.log(err);
               res.status(400).send(err);
           }
           res.status(200).send(result.rows);
           
           
       });
    });
});
 
app.listen(5432, function () {
    console.log('Server is running.. on Port 5432');
});
