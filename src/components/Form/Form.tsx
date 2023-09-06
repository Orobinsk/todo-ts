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
        <div className={cls.container}>
            <form onSubmit={onSubmitHandler}>
                <input
                    placeholder='Enter new todo'
                    value={nameTodo}
                    onChange={(e) =>setNameTodo(e.target.value)}
                />
                <Button
                    type="Submit"
                    title="Submit"
                >Submit
                </Button>
            </form>
        </div>
    );
};

export default Form
