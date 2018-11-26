import {userInitialState} from '../constants/initialState';
import {REGISTER, GET_CODE, LOGIN, UPDATE_USER} from "../actions";

export const registerReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case REGISTER:
            return Object.assign(state, {}, {
                login: action.username,
                name: action.name,
                last_name: action.last_name,
                password: action.password,
                email: action.email,
                code: action.code
            });
        case GET_CODE:
            return state;
        default:
            return state;
    }
};
export function userReducer(state = userInitialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return action.user;
        default:
            return state;
    }
}

export function loginReducer(state = userInitialState, action) {
    switch(action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                login: action.login,
                password: action.password
            });
        default:
            return state;
    }
}