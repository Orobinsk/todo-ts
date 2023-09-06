import style from './Button.module.scss'

function Button(props:any) {
    const { children, disabled = false} =props
    return <button
        {...props}
        className={style.button}
        disabled={disabled}
    >
        {children}
    </button>
}

export default Button