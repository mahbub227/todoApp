var express = require('express');

var app = express();

var todoController = require('./controllers/todolistcontroller');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(8000);