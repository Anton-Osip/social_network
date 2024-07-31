import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, state} from "./redux/state";

ReactDOM.render(
    <App state = {state} addNewPost = {addNewPost}/>,
    document.getElementById('root')
);