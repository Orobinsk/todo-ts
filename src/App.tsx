import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import {todo} from "./types/types";
import ButtonsActions from "./components/Actions/ButtonsActions";



function App() {

  const [todos, setTodos]=useState<todo[]>([])

  const addItemHandler = (nameTodo:string) => {
    const newTodo = {
      nameTodo,
      id: crypto.randomUUID(),
      isCompleted: false,

    }
    setTodos([...todos, newTodo])
    console.log('addTodoHandler', todos)
  }

  const deleteTodoHandler = (id:string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id:string) => {
    setTodos(todos.map((todo) =>
        todo.id === id
            ? {...todo, isCompleted: !todo.isCompleted}
            : {...todo}
    ))
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
    <h1>ToDo App</h1>
      <Form addItem={addItemHandler}/>
      {todos.length > 0 ? (
          <ButtonsActions
              completedTodosExist={!!completedTodosCount}
              resetTodos={resetTodosHandler}
              deleteCompletedTodos={deleteCompletedTodosHandler}
          />) : ('')}
      <List
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
      />
      <button>all</button>
      <button>active</button>
      <button>completed</button>
      {completedTodosCount>0 && <h2>{`You have completed ${completedTodosCount} ${completedTodosCount>1?'todos':'todo'}`}</h2>}
    </div>
  );
}

export default App;
