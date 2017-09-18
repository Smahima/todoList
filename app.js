const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');

const app = express();
const tasks = [{
    'text': "Laundry",
    'done': true,
    'id': 1
  },
  {
    'text': "Clean apt",
    'done': false,
    'id': 2
  },
  {
    'text': "Make money",
    'done': false,
    'id': 3
  },
  {
    'text': "Meet Matt Damon",
    'done': false,
    'id': 4
  },
  {
    'text': "Marry Matt Damon",
    'done': false,
    'id': 5
  },
];

// const MongoClient = require('mongodb').MongoClient,
//   assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017/todo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache')

app.get("/", function(req, res) {
 console.log("get called");
 res.render('index.mustache', {"tasks": tasks}
    );
  })

app.post("/", function(req, res) {
 console.log("post called");
 console.log(req.body);
 if (req.body.id) {
     markCompleted(req.body.id);
   }
    else { let maxId = tasks.length
     const newestTask = req.body.newTask
     let list = {
       'text': newestTask,
      'done': false,
      'id': maxId + 1
    }
    res.redirect('/');
  };
})

function markCompleted(id) {
     console.log("updating task: " + id);
     for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) {
         console.log("updating task: " + tasks[i].id);
         tasks[i].done = true;
       }
     }
   }

app.post('/:id', function (res, req) {
    let id = parseInt(req.param.id);
    tasks.forEach(function moveToComplete() {
      if (id === moveToComplete.id) {
        moveToComplete.id = true;
      }
    })
    res.render('index.mustache', tasks)
})

app.listen(3000, function(){
  console.log('Ciao');
})
