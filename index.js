// Generated by CoffeeScript 1.9.2
(function() {
  var app, express, server;

  express = require('express');

  app = express();

  app.get('/', function(req, res) {
    console.log(req.params);
    return res.send('Hours Logged');
  });

  server = app.listen(3000);

}).call(this);
