import React from 'react';
import cls from './ButtonsActions.module.scss'
import Button from "../UI/Button";

const ButtonsActions = ({resetTodos, deleteCompletedTodos, completedTodosExist}:any) => {
    return (
        <div className={cls.todosActionsContainer}>
            <Button
                onClick={resetTodos}
                title="Reset Todos"
            >
                reset
            </Button>
            <Button
                onClick={deleteCompletedTodos}
                title="Clear Completed Todos"
                disabled={!completedTodosExist}
            >
          delete
            </Button>
        </div>
    );
};

export default ButtonsActions;