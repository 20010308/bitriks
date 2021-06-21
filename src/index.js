import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, compose, applyMiddleware} from "redux";
import {rootReducer} from "./redux/reducer/rootReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import "./css/main.scss"
import "bootstrap/dist/css/bootstrap.min.css"

const store =createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
