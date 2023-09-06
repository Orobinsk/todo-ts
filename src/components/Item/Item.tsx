import React from 'react';
import cls from './Item.module.scss'



const Todo = ({todo, deleteTodo, toggleTodo}:any) => {
    return (
        <div className={`${cls.todo} ${todo.isCompleted ? cls.completedTodo : ''}`}>
            {/*<RiTodoFill className={style.todoIcon} />*/}
            <h5 className={cls.todoText}>{todo.nameTodo}</h5>
            <div className={cls.deleteIcon} onClick={()=>deleteTodo(todo.id)}>delete</div>
            <div className={cls.checkIcon} onClick={()=>toggleTodo(todo.id)}>check</div>
        </div>
    );
};

export default Todo;