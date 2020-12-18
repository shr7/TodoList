
import React, { useState, useEffect } from "react";
import { List } from "./List/List";
import { getTodos, addTodo, deleteTodo } from '../utils/api'


const App = () => {
  const [todos, setTodos] = useState([])
  const [currentTodo, setCurrentTodo] = useState('')
  useEffect(() => {
    getTodos(setTodos)
  }, []);
  const addTodoItem = () => {
    addTodo(currentTodo, todos, setTodos)
  }
  const changeStatus = () => {
    // api call here
  }
  const deleteTodo = () => {
    // api call here
  }
  const onInputChange = (e) => {
    setCurrentTodo(e.target.value)
  }
  return (
    <div id="main">
      <form onSubmit={addTodoItem}>
        <input type="text" value={currentTodo} onChange={onInputChange} />
        <button type="submit">+</button>
      </form>
      <List todos={todos} changeStatus={changeStatus} deleteTodo={deleteTodo} />
    </div>
  )
}


export default App;
