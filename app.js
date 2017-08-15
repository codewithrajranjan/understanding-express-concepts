var express = require('express');

var app = express();


app.set('secretKey','12345');


var secretKey = app.get('secretKey');


console.log(secretKey);
    
