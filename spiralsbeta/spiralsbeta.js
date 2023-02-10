//https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/spiralsbeta/listall', function (req, res) {
   fs.readFile( __dirname + "/" + "a.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})


//app.get('/spiralsbeta/getinfo/:id', function (req, res) {
//   // First read existing users.
//   fs.readFile( __dirname + "/" + "a.json", 'utf8', function (err, data) {
//      var users = JSON.parse( data );
//      var user = users["user" + req.params.id] 
//      console.log( user );
//      res.end( JSON.stringify(user));
//   });
//})

app.get('/spiralsbeta/getinfo/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "participant_data.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id]
      console.log( user );
      res.end( JSON.stringify(user));
   });
})


app.get('/spiralsbeta/getinfo_w3/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "participant_data_w3.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id]
      console.log( user );
      res.end( JSON.stringify(user));
   });
})


//app.get('/spiralsbeta/getassignments/:id', function (req, res) {
//   // First read existing users.
//   fs.readFile( __dirname + "/" + "a.json", 'utf8', function (err, data) {
//      var users = JSON.parse( data );
//      var user = users["user" + req.params.id]
//      var assignments = user["assignments"]
//      console.log( assignments );
//      res.end( JSON.stringify(assignments));
//   });
//})

app.get('/spiralsbeta/getassignments/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "test.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id]
      var assignments = user["assignments"]
      console.log( assignments );
      res.end( JSON.stringify(assignments));
   });
})

app.get('/spiralsbeta/getinfotest', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "a.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user1"] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})


app.get('/spiralsbeta/getassignmentstest', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "a.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user1"]
      var assignments = user["assignments"]
      console.log( assignments );
      res.end( JSON.stringify(assignments));
   });
})


app.get('/spiralsbeta/test1', function (req, res) {
   // very simple test
   res.status(200).send("WHATABYTE: Food For Devs");
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})