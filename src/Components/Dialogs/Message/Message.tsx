import React from 'react'
import styles from './Message.module.css'

type MessageProps = {
    message: string
    my: boolean
}


export const Message: React.FC<MessageProps> = ({message, my}: MessageProps) => {
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