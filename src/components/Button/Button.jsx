import './Button.css'

function Button(props){

    return(
        <>
        <button className={`btn ${props.variant} ${props.size}`}>
            {props.text}
        </button>
        </>
    )
}

export default Button;