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
      },
        {
        'text': "Make money",
        'done': false,
        'id':3
      },
        {
        'text': "Meet Matt Damon",
        'done': false,
        'id':4
        },
      {
        'text': "Marry Matt Damon",
        'done': false,
        'id':5
      },
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

  let maxId = tasks.length
  const newestTask = req.body.newTask
  let list = {
    'text': newestTask,
    'done': false,
    'id': max + 1
    }
    tasks.push(list);
    res.redirect('/');
})

app.post('/:id', function (res, req) {
    let id = parseInt(req.param.id);

    tasks.forEach(function moveToComplete() {
      if (id === moveToComplete.id) {
        moveToComplete.id = true;
      }
    })
    res.render('index.mustache', myData)
})

app.listen(3000, function(){
  console.log('Ciao');
})
