import React from 'react'
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";


export const Dialog = ({name}) => {
    return (
        <NavLink to = {`/dialogs/${name}`} className = {styles.name} activeClassName = {styles.active__name}>
            {name}
        </NavLink>
    )
}
