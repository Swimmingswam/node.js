//引入express
var express = require("express");
var bodyParser = require("body-parser");
var fs = require('fs');
//实例化express
var app = express();

var indexRouter = require('./routers/index')
var usersRouter = require('./routers/users')

app.use('/',indexRouter);
app.use('/users',usersRouter);

// app.set('view engine','ejs')
// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
// app.use(bodyParser.urlencoded({ extend: false }))    //中间件的使用
// //url根路径
// app.get('/', function (req, res) {
//     res.send("hello world!")
// })
// //url改路径
// app.get('/profile/:id/:id2', function (req, res) {
//     console.dir(req.params)
//     res.send("this is a profile page with id is " + req.params.id)
// })
// //url传参数
// app.get('/home/', function (req, res) {
//     console.dir(req.query)
//     res.send("this is a profile page with query is " + req.query.aa)
// })
// //url正则
// app.get('/ab?cd', function (req, res) {
//     res.send("this is a  page with abcd ")
// })

// app.post('/post', upload.single('logo'),function (req, res) {
//     res.send({'ret_code':0})
// })

// app.get("/form/:name", function (req, res) {
//     // var form = fs.readFileSync('./form.html',{encoding:"utf8"})
//     // res.send(form)
//     var person = req.params.name;
//     var data = {name:'swimming',age:21,hobby:["eatting","watching","singing"]}
//     res.render('form',{person:person,data:data})
// })

// app.get("/about", function (req, res) {
//     res.render('about')
// })

//app监听接口定义
app.listen(5000, function () {
    console.log("prot on 5000!")
})
