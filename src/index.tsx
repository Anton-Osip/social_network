import {state, subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state = {state} addNewPost = {addNewPost} updateNewPostText = {updateNewPostText}/>,
        document.getElementById('root')
    );
}

subscribe(rerenderEntireTree)
rerenderEntireTree()
