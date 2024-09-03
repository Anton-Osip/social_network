import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {ActionType, addMessageAC, DialogsType, MessagesType, updateNewMessageTextAC} from "../../redux/state";
import React from "react";

type DialogsProps = {
    newMessageText:string
    dialogs: DialogsType[]
    messages: MessagesType[]
    dispatch: (action: ActionType) => void
}


export const Dialogs: React.FC<DialogsProps> = ({newMessageText,dialogs, messages, dispatch}: DialogsProps) => {

    const addMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addMessageAC())
    }
    const onMessageChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }

    const dialogsElements = dialogs.map(dialog => <Dialog name = {dialog.name} key = {dialog.id}/>)
    const messagesElements = messages.map(message => (
        <Message message = {message.message} key = {message.id} my = {message.my}/>
    ))
    return (
        <div className = {styles.dialogs}>
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
                    value={newMessageText}
                    onChange={onMessageChange}
                />
                <button type = "submit" className = {styles.form__btn} onClick = {addMessage}>
                    SEND
                </button>
            </form>
        </div>
    )
}
