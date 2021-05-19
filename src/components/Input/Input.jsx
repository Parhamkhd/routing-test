
import './Input.css'

function Input(props){
    return(
        <>
            <input type={props.type} className={`input ${props.variant} ${props.dir}`} value={props.value} placeholder={props.placeholder}/>
        </>
    )
}

export default Input;