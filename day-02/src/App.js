import React, { useState } from 'react'
import TodoList  from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Todo 1' , 'Todo 2'])
  return(
    <>
    <TodoList todos={todos} />
    <input type="text" />
    <button> Add Todo</button>
    <button>Clear Task</button>
    <div>0 left to do</div>
    </>
  )
}


export default App;
