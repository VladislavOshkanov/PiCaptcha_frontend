import React from 'react'
import { Component }  from 'react'
import './GameWithWord.css';

const GameWithWord = ({user, selectedLevel, handleRadioChange}) => {
    return(
        <div id='container'>
            <h2>Игра со словом</h2>
            <h3>Выберите уровень сложности</h3>
            <ul>
                <li>
                    <label>
                        <input
                        type="radio"
                        value="easy"
                        checked={selectedLevel === "easy"}
                        onChange={handleRadioChange}
                        />
                        Легкий (30 секунд)
                    </label>
                </li>
                <li>
                    <label>
                        <input
                        type="radio"
                        value="medium"
                        checked={selectedLevel === "medium"}
                        onChange={handleRadioChange}
                        />
                        Средний (20 секунд)
                    </label>
                </li>

                <li>
                    <label>
                        <input
                        type="radio"
                        value="hard"
                        checked={selectedLevel === "hard"}
                        onChange={handleRadioChange}
                        />
                        Сложный (10 секунд)
                    </label>
                </li>
            </ul>
            <button>Играть</button>
        </div>
    )
}

export default GameWithWord