var express = require('express');

var app = express();


app.set('secretKey','12345');


var secretKey = app.get('secretKey');


// create get endpoint
app.get('/user/name/:userName/age/:userAge',function(req,res){
   
    var resourceParams = req.params;
    res.json(resourceParams);

});



// creating an express http server
app.listen(3000,function(){
    
    console.log("Server succssfully started");

});
