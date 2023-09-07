import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form/Form";
import List from "./components/List/List";
import {todo} from "./types/types";
import ButtonsActions from "./components/Actions/ButtonsActions";
import {useTodos} from "./components/hooks/useTodos";
import Button from "./components/UI/Button";


function App() {
    const [todos, setTodos] = useState<todo[]>([])
    const [filter, setFilter] = useState<string>("")

    const addItemHandler = (nameTodo: string) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            {
                nameTodo,
                id: crypto.randomUUID(),
                isCompleted: false,
            },
        ]);
    }

    const deleteTodoHandler = (id: string) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

    const toggleTodoHandler = (id: string) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
            )
        );
    };

    const sortedTodos = useTodos(todos, filter)

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <Form addItem={addItemHandler}/>
            {todos.length > 0 ? (
                <ButtonsActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={() => setTodos([])}
                    deleteCompletedTodos={() => setTodos(todos.filter((todo) => !todo.isCompleted))}
                />) : null}

            {todos.length > 0 ? (
                <ButtonsActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={() => setTodos([])}
                    deleteCompletedTodos={() => setTodos(todos.filter((todo) => !todo.isCompleted))}
                />) : null}
            <List
                todos={sortedTodos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
            <Button onClick={() => setFilter('')}>all</Button>
            <Button onClick={() => setFilter('active')}>active</Button>
            <Button onClick={() => setFilter('completed')}>completed</Button>
            {completedTodosCount > 0 &&
                <h2>
                    {`You have completed ${completedTodosCount} ${
                        completedTodosCount > 1 ? 'todos' : 'todo'
                    }`}
                </h2>}
        </div>
    );
}

export default App;
