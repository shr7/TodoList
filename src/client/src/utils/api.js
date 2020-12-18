const URL = 'http://localhost:3000/todos/';

export const getTodos = (setTodos) => {
  fetch(URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json())
    .then((data) => {
      setTodos(data);
    });
}

export const addTodo = (currentTodo, todos, setTodos) => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      detail: currentTodo,
      isDone: false
    }),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => setTodos(todos.push(data)))
  .catch(e => console.log(e))
}

export const deleteTodo = (id) => {
  fetch(`URL${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .catch(e => console.log(e))
}

export const editTodo = (id, todo, todos, setTodos) => {
  fetch(`URL${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      detail: todo.detail,
      isDone: todo.isDone
    }),
  })
  .then(response => response.json())
  .then(data => {
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(req.params.id));

    setTodos(todos.push(data))
  })
  .catch(e => console.log(e))
}