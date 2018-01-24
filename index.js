var express = require('express');
var app = express();

require('./config/config')(app);

app.get('/', function(req, res){
    res.render('index.html');
});