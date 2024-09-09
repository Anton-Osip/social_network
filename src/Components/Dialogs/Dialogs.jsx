import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

import React from "react";


export const Dialogs = ({
                            newMessageText, dialogs, messages, addMessage, onMessageChange
                        }) => {

    const addMessageHandler = (e) => {
        e.preventDefault();
        addMessage()
    }
    const onMessageChangeHandler = (e) => {
        onMessageChange(e.currentTarget.value)
    }

    const dialogsElements = dialogs.map(dialog => <Dialog name = {dialog.name} key = {dialog.id}/>)
    const messagesElements = messages.map(message => (
        <Message message = {message.message} key = {message.id} my = {message.my}/>))
    return (<div className = {styles.dialogs}>
            <h1 className = {styles.dialogs__title}>DIALOGS</h1>
            <div className = {styles.dialogs__inner}>
                <div className = {styles.dialogs____names}>{dialogsElements}</div>
                <div className = {styles.dialogs__messages}>{messagesElements}</div>
            </div>
            <form className = {styles.form}>
                <input
                    placeholder = "Messages"
                    type = "text"
                    className = {styles.form__input}
                    value = {newMessageText}
                    onChange = {onMessageChangeHandler}
                />
                <button type = "submit" className = {styles.form__btn} onClick = {addMessageHandler}>
                    SEND
                </button>
            </form>
        </div>)
}
