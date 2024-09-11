import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import React, {ChangeEvent,MouseEvent, FC} from "react";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs: FC<DialogsPropsType> = ({dialogsPage, sendMessage, updateNewMessageBody}) => {

    const addMessageHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        sendMessage()
    }
    const onMessageChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewMessageBody(e.currentTarget.value)
    }

    const dialogsElements = dialogsPage.dialogs.map(dialog => <Dialog name = {dialog.name} key = {dialog.id}/>)
    const messagesElements = dialogsPage.messages.map(message => (
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
                value = {dialogsPage.newMessageText}
                onChange = {onMessageChangeHandler}
            />
            <button type = "submit" className = {styles.form__btn} onClick = {addMessageHandler}>
                SEND
            </button>
        </form>
    </div>)
}
