import './Login.css'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

function Login(){
    return (
        <>
        <div className="login-wrapper">
            <div className="login-card">
                <h1>Enter username & password:</h1>

                <div className="login-inputs-wrapper">
                    <div className="login-input-wrapper">
                        <Input variant="" placeholder="username" type="text" dir="rtl"/>
                    </div>

                    <div className="login-input-wrapper">
                    <Input variant="" placeholder="password" dir="rtl" type="password"/>
                    </div>

                </div>

                <div className="login-btn-wrapper">

                    <Button 
                        variant="login"
                        size="medium"
                        text="login"
                    />
                </div>
            </div>
        </div>

        </>
    )
}

export default Login;