import React from 'react'
import styles from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogProps = {
    name: string
}


export const Dialog: React.FC<DialogProps> = ({name}: DialogProps) => {
    return (
        <NavLink to = {`/dialogs/${name}`} className = {styles.name} activeClassName = {styles.active__name}>
            {name}
        </NavLink>
    )
}