import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import UserScreen from './UserScreen'
import {login_user} from "../../actions";
import {connect, Dispatch} from 'react-redux';

class UserScreenContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    navigateToGameSelection = () => {
        this.props.history.push('/GameSelection')
    }

    render() {
        return (
            <UserScreen
                user = {this.props.user}
                navigateToGameSelection = {this.navigateToGameSelection}
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
)(UserScreenContainer);