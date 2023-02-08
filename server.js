var port = process.env.PORT || 3000;
var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', function (req, res) {

  var connection = mysql.createConnection({
    host: 'database-1.cnwt5f9pbnof.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Nicolas86'
  });

  connection.connect(function (err) {
    let conection = ''
    if (err) {
      conection = 'error connecting';
    } else {
      conection = 'connected';
    }
    res.send({
      Output: "Hello World!",
      desdeNode: 'aca desde node Nicolas',
      conection
    });
  });
});

app.post('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
module.exports = app;
