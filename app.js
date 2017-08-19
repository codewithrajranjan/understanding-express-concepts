var express = require('express');

var app = express();


app.set('secretKey','12345');


var secretKey = app.get('secretKey');



// creating an express http server
app.listen(3000,function(){
    
    console.log("Server succssfully started");

});
