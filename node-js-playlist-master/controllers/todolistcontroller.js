var data = [{item: 'go to school'},{item: 'wake up'},{item: 'go for a walk'}];

module.exports = function(app){
    app.get('/todo', function(req, res){
        res.render('todo.ejs',{todos: data});
    });

    app.post('/todo', function(req, res){

    });

    app.delete('/todo',function(req, res){

    });
};