import React, {FC, FormEventHandler, useState} from 'react';
import Button from "../UI/Button";
import cls from './Form.module.scss'

interface FormProps{
    addItem:any
}

const Form:FC<FormProps> = (props) => {
const {addItem}=props
    const [nameTodo, setNameTodo] = useState('')
    const onSubmitHandler:FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
         addItem(nameTodo)
        setNameTodo('')
    }
    return (
            <form onSubmit={onSubmitHandler} className={cls.Form}>
                <input
                    placeholder='Enter new todo'
                    value={nameTodo}
                    onChange={(e) =>setNameTodo(e.target.value)}
                />
                <Button
                    title="add new todo"
                >Submit
                </Button>
            </form>
    );
};

export default Form
