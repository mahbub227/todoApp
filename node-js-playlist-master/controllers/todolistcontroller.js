//var data = [{item: 'go to school'},{item: 'wake up'},{item: 'go for a walk'}];

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});


var mongoose = require('mongoose');
mongoose.connect('mongodb://mahbub227:ammusorry98@ds115442.mlab.com:15442/todo_database')

var todoSchema = new mongoose.Schema({
    item: String
});

var Todo = mongoose.model('Todo', todoSchema);
/*var itemOne = Todo({item: 'get flowers'}).save(function(err){
    if(err) throw err;
    console.log('item saved');
});*/

module.exports = function(app){
    app.get('/todo', function(req, res){
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo',{todos: data});
        });
        
    });

    app.post('/todo',urlencodedParser, function(req, res){
        var newTodo = Todo(req.body).save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });

    app.delete('/todo/:item',function(req, res){
        Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err, data){
            if(err) throw err;
            res.json(data);
        })
       
    });
};