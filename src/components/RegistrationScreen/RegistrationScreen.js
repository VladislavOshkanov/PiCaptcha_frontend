import React from "react"
import "./RegistrationScreen.css"

export default function RegistrationScreen(props) {
    return <div id='container'>
        <h1 id="registrationHeader">
            Зарегистрируйтесь в системе PiCaptcha
        </h1>
        <form id='registerForm'>
            <label>
                Имя:
                <input type='text' name='name' />
            </label>
            <label>
                Фамилия:
                <input type='text' name='last_name' />
            </label>
            <label>
                Логин:
                <input type='text' name='login'/>
            </label>
            <label>
                Email:
                <input type='email' name='email'/>
            </label>
            <label>
                Пароль:
                <input type='password' name='password'/>
            </label>
        </form>
        <form id='registerCodeForm'>
            <label id="registerCodeLabel">
                <button style={{margin: '5px'}}>Получить код</button>
                <input type="text" name="code" placeholder="Введите код" />
            </label>
        </form>
        <div id='registerBottom'>
            <div id="left">
                <button>Зарегистрироваться</button>
            </div>
            <div id="right">
                <button>Отмена</button>
            </div>
        </div>


    </div>
}