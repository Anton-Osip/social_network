import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
    my: boolean
}


const postsData: PostsType[] = [
    {id: 'postData1', message: 'Hey, why nobody love me?', likeCount: 1},
    {id: 'postData2', message: 't\'s our new program! Hey!', likeCount: 25},
    {id: 'postData3', message: 'Hey, why nobody love me?', likeCount: 100},
]
let dialogsData: DialogsType[] = [
    {id: 'dialog1', name: 'Anton'},
    {id: 'dialog2', name: 'Yana'},
    {id: 'dialog3', name: 'Valera'},
    {id: 'dialog4', name: 'Viktor'},
    {id: 'dialog5', name: 'Pasha'},
]
let messagesData: MessagesType[] = [
    {id: 'message1', message: 'I am a normal pBLablabl I can have text and everything', my: false},
    {id: 'message2', message: 'I am a normal pBLablabl I can have text and everything', my: true},
    {id: 'message3', message: 'I am a normal pBLablabl I can have text and everything', my: false},
    {id: 'message4', message: 'I am a normal pBLablabl I can have text and everything', my: true},
]

ReactDOM.render(
    <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>,
  document.getElementById('root')
);