import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import GameWithWord from './GameWithWord'
import {login_user} from "../../actions";
import {connect, Dispatch} from 'react-redux';
import LC from "literallycanvas/lib/js";
import {getPictureClass, getWord} from '../../services/api'

class GameWithWordContainer extends Component {
    constructor(props) {
        super(props);
        this.drawer = undefined;
        this.state = {
            selectedLevel: "easy",
            isPlaying: false,
            thisIs: '..',
            whatToDraw: '...',
            isSuccess: false,
            isFailure: false,
            remains: 30,
        }
    }

    componentDidMount() {
        // this.props.history.push('/User')

    }
    getGameTime = () => {
        let remains = 30;
        switch (this.state.selectedLevel) {
            case "easy":
                remains = 30;
                break;
            case "medium":
                remains = 20;
                break;
            case "hard":
                remains = 10;
                break;
            default:
                break;
        }
        return remains;
    }
    handleRadioChange = (event)  => {
        this.setState({
            selectedLevel: event.target.value
        })
        this.setState({remains: this.getGameTime()});
    };

    onLevelSelect = () => {
        this.setState({
           isPlaying: false
        });
    };

    onPlay = () => {

        this.setState({
                isPlaying: true,
                isSuccess: false,
                isFailure: false,
                remains: this.getGameTime(),
            },
                () => { this.drawer = LC.init(document.getElementById('drawer'), options)}
        );
        getWord().then(word => this.setState({whatToDraw: word}));
        
        let interval = setInterval(() => {
            let pictureBase64 = this.drawer.getImage().toDataURL('image/jpeg').split(',')[1];
            getPictureClass(pictureBase64).then(word => this.setState({thisIs: word}));
            if (this.state.whatToDraw === this.state.thisIs){
                 this.setState({isSuccess: true});
                 clearInterval(interval);
            }
            this.setState({remains : this.state.remains - 1});

            if (this.state.remains < 1){
                 this.setState({isFailure: true});
                 clearInterval(interval);
            }
            console.log(this.state.remains)
        }, 1000)
        let options = {
            imageSize: {width: 256, height: 256},
            toolbarPosition: 'hidden',
            backgroundColor: '#fff',
        }


    };

    render() {
        return (
            <GameWithWord
                selectedLevel = {this.state.selectedLevel}
                handleRadioChange = {this.handleRadioChange}
                onLevelSelect = {this.onLevelSelect}
                onPlay = {this.onPlay}
                isPlaying = {this.state.isPlaying}
                isSuccess = {this.state.isSuccess}
                isFailure = {this.state.isFailure}
                thisIs = {this.state.thisIs}
                whatToDraw = {this.state.whatToDraw}
                remains = {this.state.remains}
            />
        )
    }
}

function mapStateToProps (state){
    return {
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
      
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(GameWithWordContainer);