const express = require('express')
const todoController = require('./controller/todoController');
const app = express()

app.use(express.json())

app.get('/api/todos', todoController.getTodo )
app.post('/api/todos', todoController.postTodo )
app.patch('/api/todos/:index', todoController.updateTodo )
app.delete('/api/todos/:index', todoController.deleteTodo )

app.listen(4001, () => console.log(`Server started, port: 4001`))
