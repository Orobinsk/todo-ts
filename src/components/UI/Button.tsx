import cls from './Button.module.scss'
import {ButtonHTMLAttributes, FC, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode,
    disabled?:boolean,
}

const Button:FC<ButtonProps>=(props)=> {
    const { children, disabled = false} =props
    return <button
        {...props}
        className={cls.button}
        disabled={disabled}
    >
        {children}
    </button>
}

export default Button