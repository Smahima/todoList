const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const expressValidator = require('express-validator');
<<<<<<< HEAD
=======
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
]

// const MongoClient = require('mongodb').MongoClient,
//   assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017/todo';
//
// let database;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator())

app.engine('mustache', mustacheExpress());
app.set('views','./views');
app.set('view engine', 'mustache')

app.get("/", function(req, res) {
  let collection = database.collection('todos');
  collection.find({}).toArray(function(err, todo) {
    console.log("my todos");
    res.render('index', {todos: todo});
  });
})
app.post("/", function(req, res) {
  console.log("post called");
  console.log(req.body);
  if (req.body.id) {
    markCompleted(req.body.id);
  }
  // tasks isn't defined? remove this?
  else {
    let maxId = tasks.length
    const newestTask = req.body.newTask
    let list = {
      'text': newestTask,
      'done': false,
      'id': maxId + 1
    }
    // tasks.push(list);
    let collection = database.collection('todos');
    collection.find({}).toArray(function(err, todo) {
      collection.insertOne([{}], function(err, todo) {
        console.log("new task");
          res.render('index', {todos: todo});
        };
      });
    })
  })
  // res.redirect('/');


function markCompleted(id) {
  console.log("updating task: " + id);
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      console.log("updating task: " + tasks[i].id);
      tasks[i].done = true;
    }
  }
}

app.listen(3000, function() {
=======
app.get("/", function (req, res) {
  res.render('index.mustache', {tasks: tasks});
})

app.post("/", function (req, res) {

  let maxId = tasks.length
  const newestTask = req.body.newTask
  let list = {
    'text': newestTask,
    'done': false,
    'id': maxId + 1
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
    res.render('index.mustache', tasks)
})

app.listen(3000, function(){
  console.log('Ciao');
})

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to mongodb");
//   database = db;
// });
//
// process.on('SIGINT', function() {
//   console.log("\nshutting down");
//   database.close(function() {
//     console.log('mongodb disconnected on app termination');
//     process.exit(0);
//   });
// });
