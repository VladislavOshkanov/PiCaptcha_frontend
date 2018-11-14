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
                    Имя:
                    <input type='text' name='name' onChange={(e) => this.setState({name: e.target.value})}/>
                </label>
                <label>
                    Фамилия:
                    <input type='text' name='last_name' onChange={(e) => this.setState({last_name: e.target.value})}/>
                </label>
                <label>
                    Логин:
                    <input type='text' name='login' onChange={(e) => this.setState({login: e.target.value})}/>
                </label>
                <label>
                    Email:
                    <input type='email' name='email' onChange={(e) => this.setState({email: e.target.value})}/>
                </label>
                <label>
                    Пароль:
                    <input type='password' name='password' onChange={(e) => this.setState({password: e.target.value})}/>
                </label>
            </form>
            <form id='registerCodeForm'>
                <label id="registerCodeLabel">
                    <button style={{margin: '5px'}}>Получить код</button>
                    <input
                        type="text"
                        name="code"
                        placeholder="Введите код"
                        onChange={(e) => this.setState({code: e.target.value})}
                    />
                </label>
            </form>
            <div id='registerBottom'>
                <div id="left">
                    <button onClick={(e) =>
                        this.props.onRegisterClick(
                            this.state.login,
                            this.state.name,
                            this.state.last_name,
                            this.state.password,
                            this.state.code
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