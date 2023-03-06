var port = process.env.PORT || 3000;
var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors())

app.get('/', function (req, res) {
  res.send({
    Output: "Hello World!",
    desdeNode: 'aca desde node Nicolas',
  });
});

app.post('/', function (req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.listen(port);
module.exports = app;
