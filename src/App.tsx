import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from './Components/News/News';
import {DialogsType, MessagesType, PostsType} from "./index";


type AppType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages:MessagesType[]
}

const App: React.FC<AppType> = ({posts,dialogs,messages}: AppType) => {
    return (
        <BrowserRouter>
            <div className = "app-wrapper">
                <Header/>
                <Navbar/>
                <div className = "content">
                    <Route path = "/dialogs" render = {() => <Dialogs dialogs = {dialogs} messages={messages}/>}/>
                    <Route path = "/profile" render = {() => <Profile posts = {posts}/>}/>
                    <Route path = "/news" component = {News}/>
                    <Route path = "/music" component = {Music}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
