import React from 'react'
import { Component }  from 'react'
import './UserScreen.css';


const UserScreen = ({user, navigateToGameSelection}) => {
    return(
        <div id='container'>
        <h2>Здравствуйте, {user.login}</h2>
        <h2>Выберите действие и продолжите работу с PiCaptcha</h2>
        <div id='buttonsContainer'>
            <div className='buttonsRow'>
                <button onClick={navigateToGameSelection}>Играть</button>
                <button>Друзья</button>
            </div>
            <button>Изменить персональные данные</button>
            <button>Просмотреть статистику</button>

        </div>
        </div>
    )
}


export default UserScreen