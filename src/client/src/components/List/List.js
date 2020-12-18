import React from 'react';
import './List.css';

export const List = (props) => {
  return (<>{
    props.todos.map((todo, index) => 
      <div key={todo.id} className='todo-item'>
        <span className={todo.isDone ? 'doneTodo' : 'undoneTodo'}>
          {index+1}.     {todo.detail}
        </span>
        <div>
          <button onClick={props.changeStatus}>{todo.isDone ? 'Undo' : 'Done'}</button>
          <button onClick={props.deleteTodo}>Delete</button>
        </div>
      </div>
    )}
  </>)
}