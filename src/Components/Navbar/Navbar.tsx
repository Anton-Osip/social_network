import React from 'react'
import styles from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav className = {styles.nav}>
            <ul className = {styles.list}>
                <li>
                    <NavLink
                        to = "/profile"
                        className = {styles.item}
                        activeClassName = {styles.active}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/dialogs"
                        className = {styles.item}
                        activeClassName = {styles.active}>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/news"
                        className = {styles.item}
                        activeClassName = {styles.active}>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to = "/music"
                        className = {styles.item}
                        activeClassName = {styles.active}>
                        Music
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}