import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from './Components/News/News';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";


type AppType = {
    store: any
}

const App: React.FC<AppType> = ({store}: AppType) => {
    return (
        <BrowserRouter>
            <div className = "app-wrapper">
                <Header/>
                <Navbar/>
                <div className = "content">
                    <Route path = "/dialogs"
                           render = {() => <DialogsContainer store = {store}/>}
                    />
                    <Route path = "/profile"
                           render = {() => <Profile store = {store}/>}
                    />
                    <Route path = "/news" component = {News}/>
                    <Route path = "/music" component = {Music}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
