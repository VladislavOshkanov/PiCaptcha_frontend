import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import GameSelection from './GameSelection'
import {login_user} from "../../actions";
import {connect, Dispatch} from 'react-redux';

class GameSelectionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    navigateToRegistration() {
        this.props.history.push('/Registration')
    }

    render() {
        return (
            <GameSelection
                user = {this.props.user}
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
)(GameSelectionContainer);