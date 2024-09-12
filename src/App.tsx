import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./Components/Music/Music";
import {News} from './Components/News/News';
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {Users} from "./Components/Users/Users";
import {UsersContainer} from "./Components/Users/UsersContainer";


const App = () => {
    return (
        <div className = "app-wrapper">
            <Header/>
            <Navbar/>
            <div className = "content">
                <Route path = "/dialogs"
                       render = {() => <DialogsContainer/>}
                />
                <Route path = "/profile"
                       render = {() => <Profile/>}
                />
                <Route path = "/news" component = {News}/>
                <Route path = "/music" component = {Music}/>
                <Route path = "/users" render = {() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
