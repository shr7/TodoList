const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const setupServer = () => {
  const app = express();
  app.listen(3000);
  app.use(cors());
  app.set('port', 8080 || 3000);
  return app;
}

setupServer()

const jsonParser = bodyParser.json()

let todos = [];
let nextId = 1;

app.get('/todos', (req, res) => {
  res.status(200).send(todos)
})

app.post('/todos', jsonParser, (req, res) => {
  try {
    const id = nextId;
    nextId++;
    todos.push({
      id,
      detail: req.body.detail,
      isDone: false,
    })
    res.status(200).send({id: id})
  } catch {
    res.status(400).end()
  }
})

app.get('/todos/:id', jsonParser, (req, res) => {
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
  res.status(200).send(todos[todoIndex])
})

app.put('/todos/:id', jsonParser, (req, res) => {
  try {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));
    todos[todoIndex] = {
      ...todos[todoIndex],
      detail: req.body.detail,
      isDone: req.body.isDone
    }
    res.status(200).send(todos[todoIndex])
  } catch {
    res.status(400).end()
  }
})

app.delete('/todos/:id', jsonParser, (req, res) => {
  try {
    const idToDelete = parseInt(req.params.id)
    const todoIndex = todos.findIndex(todo => todo === idToDelete);
    todos = todos.filter(todo => todo.id !== idToDelete)
    res.status(200).send({id: idToDelete})
  } catch {
    res.status(400).end()
  }
})
