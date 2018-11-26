import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import GameWithWord from './GameWithWord'
import {login_user} from "../../actions";
import {connect, Dispatch} from 'react-redux';

class GameWithWordContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLevel: "easy"
        }
    }
    componentDidMount() {
        // this.props.history.push('/User')

    }
    handleRadioChange = (event)  => {
        this.setState({
            selectedLevel: event.target.value
        })
    }

    render() {
        return (
            <GameWithWord
                selectedLevel = {this.state.selectedLevel}
                handleRadioChange = {this.handleRadioChange}
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