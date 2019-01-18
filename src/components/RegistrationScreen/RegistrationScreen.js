import React from "react"
import "./RegistrationScreen.css"

export default class RegistrationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            login: "",
            name: "",
            last_name: "",
            password: "",
            email: "",
            code: ""
        }
    }

    render() {
        return <div id='container'>
            <h1 id="registrationHeader">
                Зарегистрируйтесь в системе PiCaptcha
            </h1>
            <form id='registerForm'>
            
                <label>
                    Логин:
                    <input type='text' name='login' onChange={(e) => this.setState({login: e.target.value})}/>
                </label>
               
                <label>
                    Пароль:
                    <input type='password' name='password' onChange={(e) => this.setState({password: e.target.value})}/>
                </label>
            </form>
            
            <div id='registerBottom'>
                <div id="left">
                    <button onClick={(e) =>
                        this.props.onRegisterClick(
                            this.state.login,
                            this.state.password,
                        )
                    }>
                        Зарегистрироваться
                    </button>
                </div>
                <div id="right">
                    <button>Отмена</button>
                </div>
            </div>


        </div>
    }
}