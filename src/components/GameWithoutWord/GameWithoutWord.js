import React from 'react'
import {Modal} from "react-bootstrap"
import LC from "literallycanvas/lib/js";

import "literallycanvas/lib/css/literallycanvas.css"

import './GameWithoutWord.css';

const starImage = require("./icons8-star-filled-96.png");

function GameWithoutWord(props) {
    return props.isPlaying ? <GamePage {...props}/> : <LevelSelector {...props}/>;
}

function LevelSelector(props) {
    return <div id='container'>
        <h2>Игра со словом</h2>
        <h3>Выберите уровень сложности</h3>
        <ul>
            <li>
                <label>
                    <input
                        type="radio"
                        value="easy"
                        checked={props.selectedLevel === "easy"}
                        onChange={props.handleRadioChange}
                    />
                    Легкий (30 секунд)
                </label>
            </li>
            <li>
                <label>
                    <input
                        type="radio"
                        value="medium"
                        checked={props.selectedLevel === "medium"}
                        onChange={props.handleRadioChange}
                    />
                    Средний (20 секунд)
                </label>
            </li>

            <li>
                <label>
                    <input
                        type="radio"
                        value="hard"
                        checked={props.selectedLevel === "hard"}
                        onChange={props.handleRadioChange}
                    />
                    Сложный (10 секунд)
                </label>
            </li>
        </ul>
        <button onClick={props.onPlay}>Играть</button>
    </div>
}

function GamePage(props) {
    return <div className="container">
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        Нарисуй что-нибудь, а я угадаю😃
                    </Modal.Header>
                    <Modal.Body>
                        {
                            props.isSuccess ? 
                                <GameSuccessBody {...props}/> :
                                (props.isFailure) ?
                                    <GameFailureBody {...props}/> :
                                         <GameMainBody {...props}/>
                        }
                    </Modal.Body>
                    <Modal.Footer align="center">
                        {
                            (props.checked) ? <GameSuccessFooter {...props}/> : <GameMainFooter {...props}/>
                        }
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
}

function GameMainBody(props) {
    return <div id="drawer"/>
}

function GameSuccessBody(props) {
    return <span>
        <img src={starImage}/>
        <h2 style={{display: "inline", margin: "5px"}}> Вы выиграли! :)</h2>
    </span>
}

function GameFailureBody(props) {
    return <span>
        <h2 style={{display: "inline", margin: "5px"}}> Время вышло </h2>
    </span>
}

function GameMainFooter(props) {
    return <div style = {{display: 'inline'}}>
        { (props.sentOnServer) && <span style ={{fontSize: '8pt'}}>Результат отправлен на сервер для обучения нейронной сети</span>}
        <button style ={{marginLeft: '10px'}} onClick={props.onCheck}>Угадывай!</button>
    </div>
}

function GameSuccessFooter(props) {
    return <div className="clearfix">
    <div style = {{display: 'inline'}}>
        <span style = {{fontSize: '18pt'}}>Это {props.thisIs}</span>
        <button onClick={props.onConfirm} style ={{marginLeft: '10px'}}>Правильно!</button>
        <button onClick={props.onDecline} style ={{marginLeft: '10px'}}>Не правильно:(</button>
    </div>
    </div>
}

export default GameWithoutWord