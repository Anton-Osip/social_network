import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import styles from "./Components/Profile/Profile.module.css";

const App: React.FC = () => {
    return (
        <div className = "app-wrapper">
            <Header/>
            <Navbar/>
            <div className = {styles.content}>
                <Profile/>
                {/*<Dialogs/>*/}
            </div>

        </div>
    );
}

export default App;
