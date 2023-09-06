import React, {useState} from 'react';
import {todo} from "../../types/types";
import cls from './List.module.scss'
import Item from "../Item/Item";

const TodoList = ({todos, deleteTodo, toggleTodo}:any) => {

    return(
        <div>
            {!todos.length && <h2>Todo list is empty</h2>}
            {todos.map((todo:todo) =>
                (<Item
                    deleteTodo={deleteTodo}
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                />))}
        </div>
    )
};

export default TodoList;