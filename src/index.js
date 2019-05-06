import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore } from 'redux';
import todoReducer from './reducers/todoReducer';
import { Provider } from 'react-redux';
import {loadState,saveState} from './reducers/localStorage'

const persistedState = loadState();


const store = createStore(todoReducer,persistedState);



    store.subscribe(()=>{
    saveState(store.getState());
})  
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

