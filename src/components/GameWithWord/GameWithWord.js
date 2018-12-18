import React from 'react'
import {Modal} from "react-bootstrap"
import LC from "literallycanvas/lib/js";

import "literallycanvas/lib/css/literallycanvas.css"

import './GameWithWord.css';

const starImage = require("./icons8-star-filled-96.png");

function GameWithWord(props) {
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
                        Игра со словом
                    </Modal.Header>
                    <Modal.Body>
                        {
                            props.isSuccess ? <GameSuccessBody {...props}/> : <GameMainBody {...props}/>
                        }
                    </Modal.Body>
                    <Modal.Footer align="center">
                        {
                            props.isSuccess ? <GameSuccessFooter {...props}/> : <GameMainFooter {...props}/>
                        }
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </div>
}

function GameMainBody(props) {
    return <LC.LiterallyCanvasReactComponent
        tools={[LC.tools.Pencil, LC.tools.Eraser]}
        strokeWidths={[5]}
        backgroundColor="white"
        toolbarPosition="hidden"
        imageURLPrefix="./img"
    />
}

function GameSuccessBody(props) {
    return <span>
        <img src={starImage}/>
        <h2 style={{display: "inline", margin: "5px"}}> Вы выйграли! :)</h2>
    </span>
}

function GameMainFooter(props) {
    return <h3>Это яблоко...</h3>

}

function GameSuccessFooter(props) {
    return <div className="clearfix">
        <button style={{float: "right"}}>Играть еще!</button>
    </div>
}

export default GameWithWord