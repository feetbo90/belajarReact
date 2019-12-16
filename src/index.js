import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import { Provider } from 'react-redux';
import App from "./App";
import resultReducer from './store/reducer/result';
import counterReducer from './store/reducer/counter';

const rootReducer = combineReducers({
    result: resultReducer,
    ctr: counterReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
