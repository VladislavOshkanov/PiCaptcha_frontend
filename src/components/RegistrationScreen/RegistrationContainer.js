import React from "react";
import RegistrationScreen from "./RegistrationScreen.js";
import {register_user} from "../../actions";
import {register} from "../../services/api"
import connect from "react-redux/es/connect/connect";

class RegistrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            name: '',
            last_name: '',
            password: '',
            email: '',
            code: ''
        }
    }
    onRegisterClick = (login, password) => {
        register(login, password).then(response => {
            this.props.history.push('/GameSelection')
        })
    }
    render() {
        console.log(this.state);
        return <RegistrationScreen 
            onRegisterClick = {this.onRegisterClick}
        />
    }
}

function mapStateToProps(state) {
    return {};
}


function mapDispatchToProps(dispatch) {
    return {
        onRegisterClick:
            (login, name, last_name, password, email, code) =>
                dispatch(register_user(login, name, last_name, password, email, code))
    };

}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);