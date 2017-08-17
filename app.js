const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
let tasks = [{
      'text': "Laundry",
      'done': true,
      'id':1
    },
  ]

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache')

app.get("/", function (req, res) {
  res.render('index.mustache');
});

app.post("/", function (req, res) {
  tasks.push(req.body.tasks);
  res.redirect('/');
})

app.listen(3000, function(){
  console.log('Ciao');
})
