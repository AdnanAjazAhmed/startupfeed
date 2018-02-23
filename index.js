var express = require('express');
var app = express();
var mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, function (err) {
       if (err) {
         console.log('oops somehting went wrong:', err);
       } else {
         console.log('Databse connected:', config.db);
       }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/client.dist/index.html'));
});

app.listen(8080, function(){

     console.log('listening on port 8080');

});
