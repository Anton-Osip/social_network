import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state = {store.getState()} addNewPost = {store.addNewPost.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree()
