var port = process.env.PORT || 3000;
var express = require('express');
var mysql = require('mysql');

var app = express();

app.get('/', function (req, res) {

  var connection = mysql.createConnection({
    host: 'database-1.cnwt5f9pbnof.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Nicolas86',
    database: 'sys'
  });

  connection.connect(function (err) {
    let conection = ''
    if (err) {
      conection = 'error connecting';
    } else {
      conection = 'connected';
    }
    connection.query('SELECT * FROM users', (err, result) => {
      res.send({
        Output: "Hello World!",
        desdeNode: 'aca desde node Nicolas',
        result,
        conection,
      });
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
