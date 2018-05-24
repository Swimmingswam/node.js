var express = require("express");

var app = express();

app.use('/assets/',express.static('public'));

app.use(function(req,res,next){
    console.log('first middleware');
    next()
    console.log('first middleware!');
    
})

app.use('/home/',function(req,res,next){
    console.log('second middleware');
    res.send("111")
    next()
    console.log('second middleware!');
    
})

// app.get('/',function(req,res){
//     res.send("ok")
// })

app.listen(3000,function(){
    console.log("port 3000 is now on")
})