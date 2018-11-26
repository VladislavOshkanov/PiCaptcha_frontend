import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { loginReducer, registerReducer } from './reducers/index';
import AppRouter from './AppRouter';
import { combineReducers, createStore } from "redux"
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
});

const store = createStore(
  rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
