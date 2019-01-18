import React from 'react'
import { Component }  from 'react'
import './GameSelection.css';


const GameSelection = ({user, navigateToGameWithWord, navigateToGameWithoutWord}) => {
    return(
        <div id='container'>
        <h2>Выберите режим игры</h2>
        <h2>Одиночная игра</h2>
        <div id='buttonsContainer'>
            <div className='buttonsRow'>
                <button onClick={() => navigateToGameWithWord()}>Игра со словом</button>
                <button onClick={() => navigateToGameWithoutWord()}>Игра без слова</button>
            </div>
        </div>
        <h2>Многопользовательская игра</h2>
        <div id='buttonsContainer'>
            {
            (user.id !== 0) ?
            <div className='buttonsRow'>
                <button>Игра с другом</button>
                <button>Игра со случайным пользователем</button>
            </div>
            :
            <button>Игра со случайным пользователем</button>
            }
        </div>
        </div>
    )
}



export default GameSelection