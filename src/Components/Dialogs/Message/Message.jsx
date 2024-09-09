import React from 'react'
import styles from './Message.module.css'


export const Message = ({message, my}) => {
    return (
        <div
            className = {
                my
                    ? `${styles.dialogs__message}  ${styles.dialogs__myMessage}`
                    : `${styles.dialogs__message}`
            }
        >
            <p className = {styles.dialogs__text}>{message}</p>
        </div>
    )
}
