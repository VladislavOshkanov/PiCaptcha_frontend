import React from "react";
import RegistrationScreen from "./RegistrationScreen.js";
import {register_user} from "../../actions";
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

    render() {
        console.log(this.state);
        return <RegistrationScreen {...this.props}/>
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