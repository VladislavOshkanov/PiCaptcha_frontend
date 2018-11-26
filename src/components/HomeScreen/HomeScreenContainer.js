import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import HomeScreen from './HomeScreen'
import {login_user} from "../../actions";
import {connect, Dispatch} from 'react-redux';

class HomeScreenContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        }
    }

    navigateToRegistration() {
        this.props.history.push('/Registration')
    }

    render() {
        return (
            <HomeScreen
                navigateToRegistration = {this.navigateToRegistration.bind(this)}
                {...this.props}
            />
        )
    }
}

function mapStateToProps (state){
    return {
        login: state.login,
        password: state.password
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoginClick: (login, password) =>
            dispatch(login_user(login, password))
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenContainer);