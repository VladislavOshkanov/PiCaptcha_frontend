import React from 'react'
import {withRouter} from 'react-router-dom'
import {Component} from 'react'
import HomeScreen from './HomeScreen'
import { connect, Dispatch} from 'react-redux';

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
            />
        )
    }

}

export function mapStateToProps ( state  ){
    return {
  
    }
  }
  
  export function mapDispatchToProps(dispatch) {
    return {
  
    }
  }
  
  export default connect (mapStateToProps, mapDispatchToProps)(HomeScreenContainer);