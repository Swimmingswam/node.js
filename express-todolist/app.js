var express = require('express');

var todoController = require("./controllers/todoController.js");   //引入路由文件

var app = express();

app.set('view engine','ejs');  //设置ejs模板引擎

app.use(express.static("./public"));  //中间件配置静态资源地址

todoController(app);  //使用路由文件

app.listen(8000,function(req,res){     //监听端口
    console.log("project is run on port 8000!")
})