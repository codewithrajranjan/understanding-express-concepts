var express = require('express');

var app = express();


app.set('secretKey','12345');


var secretKey = app.get('secretKey');


// create get endpoint
app.get('/user',function(req,res){
    
    var obj = {
        "ip" : req.ip,
        "method" : req.method,
        "headers" : req.headers
    };
    res.json(obj);

});



// creating an express http server
app.listen(3000,function(){
    
    console.log("Server succssfully started");

});
