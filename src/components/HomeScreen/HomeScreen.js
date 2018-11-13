import React from 'react'
import { Component }  from 'react'
import './HomeScreen.css';


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLogin: "",
            inputPassword: ""
        }
    }

    render() {
        return (
            <div id='container'>
                <h1 id='appHeader'>PiCaptcha</h1>
                <form id='loginform'>
                    <label>
                        Логин:
                        <input type='text' name='login' onChange={
                            (e) => this.setState({login: e.target.value})
                        }/>
                    </label>
                    <label>
                        Пароль:
                        <input type='password' name='password' onChange={
                            (e) => this.setState({password: e.target.value}
                            )}
                        />
                    </label>
                    <div id='loginbuttonlabel'>
                        <button onClick={(e) => {
                            e.preventDefault();
                            this.props.onLoginClick(this.state.login, this.state.password)
                        }}>
                            Войти
                        </button>
                    </div>
                </form>
                <div id='bottom'>
                    <div id='right'>
                        <h3>У вас ещё нет аккаунта PiCaptcha?</h3>
                        <button onClick={() => this.props.navigateToRegistration()}>Регистрация</button>
                        <text>Вы сможете добавлять друзей, играть с друзьями и просматривать статистику по играм.</text>
                    </div>
                    <div id='left'>
                        <h3>Вы можете играть без регистрации</h3>
                        <button>Играть без регистрации</button>
                        <text>В этом случае у Вас не будет возможности добавлять друзей и просматривать статистику.
                        </text>

                    </div>

                </div>
            </div>
        )
    }
}

export default HomeScreen