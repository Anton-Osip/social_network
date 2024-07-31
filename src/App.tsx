import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from './Components/News/News';
import {addNewPost, StateType} from "./redux/state";


type AppType = {
    state: StateType
    addNewPost: (postMessage: string) => void
}

const App: React.FC<AppType> = ({state, addNewPost}: AppType) => {
    return (
        <BrowserRouter>
            <div className = "app-wrapper">
                <Header/>
                <Navbar/>
                <div className = "content">
                    <Route path = "/dialogs"
                           render = {() => <Dialogs dialogs = {state.dialogsPage.dialogs}
                                                    messages = {state.dialogsPage.messages}/>}
                    />
                    <Route path = "/profile"
                           render = {() => <Profile posts = {state.profilePage.posts} addNewPost = {addNewPost}/>}
                    />
                    <Route path = "/news" component = {News}/>
                    <Route path = "/music" component = {Music}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
