
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const GET_CODE = 'GET_CODE';

export function login_user(login, password) {
    return {
        type: LOGIN,
        login: login,
        password: password
    }
}

export function register_user(
    login,
    name,
    last_name,
    password,
    email,
    code
) {
    return {
        type: REGISTER,
        login: login,
        name: name,
        last_name: last_name,
        password: password,
        email: email,
        code: code
    }
}

export function get_user_code(email) {
    return {
        type: GET_CODE,
        email: email
    }
}