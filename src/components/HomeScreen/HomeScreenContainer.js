import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import HomeScreen from './HomeScreen'
import {login_user} from "../../actions";
import {connect, Dispatch} from 'react-redux';
import {login} from '../../services/api';

class HomeScreenContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            isLoggedIn: false,
        }
    }
    componentDidMount() {
        // this.props.history.push('/User')

    }
    navigateToRegistration = () =>  {
        this.props.history.push('/Registration')
    }
    navigateToGameSelection = () => {
        this.props.history.push('/GameSelection')
    }
    handleLoginChange = (login) => {
        this.setState({login: login});
    }
    onLoginClick = () => {
        console.log('login clicked')
        login(this.state.login, this.state.password).then(text => {
            if (text.substr(0, 1) == 'L'){
                console.log("EQUAL")
                this.props.history.push('/User');
            } else {
                alert('Логин или пароль неверный')
            }
            
        })
    }
    handlePasswordChange = (password) => {
        console.log(password);
        this.setState({password: password});
    }
    
    render() {
        return (
            <HomeScreen
                onLoginClick = {this.onLoginClick}
                navigateToRegistration = {this.navigateToRegistration}
                navigateToGameSelection = {this.navigateToGameSelection}
                handleLoginChange = {this.handleLoginChange}
                handlePasswordChange = {this.handlePasswordChange}
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
   
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(HomeScreenContainer);