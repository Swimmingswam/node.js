var bodyParser = require('body-parser');   //用于处理表单
var urlencodedParser = bodyParser.urlencoded({ extend: false });

var mongoose = require('mongoose');   //远程数据库
mongoose.connect('mongodb://swimming:zym915860430@ds133920.mlab.com:33920/todos')  //mlab中数据库的接口
var todoSchema = new mongoose.Schema({
    item: String    //设置数据库中item的类型
});
var Todo = mongoose.model("Todo", todoSchema);  //链接到数据库的表

// var itemOne = Todo({item:'buy flowers'}).save(function(err){
//   if(err) throw err;
//   console.log('item saved');    //把item:buy flowers 记录保存到数据库中
// });

// var data = [{item:'get milk'},{item:'walk dog'},{item:"kick some codes"}]

module.exports = function (app) {
    app.get("/todo", function (req, res) {  //显示item，展示视图
        Todo.find({}, function (err, data) {   //寻找所有数据库中的数据item
            if (err) throw err;
            res.render('todo', { todos: data })  //加载views/todo.ejs 视图页面 
        })

    })

    app.post("/todo", urlencodedParser, function (req, res) {   //添加item
        var itemOne = Todo(req.body).save(function (err,data) {
            if (err) throw err;
            res.json(data);
        });
    })
 
    app.delete("/todo/:item", function (req, res) {   //删除item
        Todo.find({item:req.params.item.replace(/-/g," ")}).remove(function (err, data) {   //从数据库中查找点击后的params的item字段，并删除
            if (err) throw err;
            res.json(data)  
        })
    })
}