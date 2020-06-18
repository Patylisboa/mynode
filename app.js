var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello, World!\n');
});

app.get('/mars', function(req, res) {
    res.send('Hello Mars!\n');
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});

module.exports = app;