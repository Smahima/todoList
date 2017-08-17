const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
const tasks = [{
      'text': "Laundry",
      'done': true,
      'id':1
    },
    {
          'text': "Clean apt",
          'done': false,
          'id':2
        }
  ]

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache')

app.get("/", function (req, res) {
  res.render('index.mustache', {tasks: tasks});
})

app.post("/", function (req, res) {

  let max = tasks.length
  const newestTask = req.body.newTask
  let list = {
    'text': newestTask,
    'done': false,
    'id': max + 1
    }
    tasks.push(list);
    res.redirect('/');
})

app.listen(3000, function(){
  console.log('Ciao');
})
