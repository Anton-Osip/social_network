import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {ActionType, DialogsType, MessagesType} from "../../redux/store";
import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsProps = {
    store: any
}


export const DialogsContainer: React.FC<DialogsProps> = ({store}: DialogsProps) => {
    const state = store.getState()

    const addMessage = () => {
        store.dispatch(addMessageAC())
    }
    const onMessageChange = (newMessage: string) => {
        store.dispatch(updateNewMessageTextAC(newMessage))
    }

    return (
        <Dialogs newMessageText = {state.dialogsPage.newMessageText} dialogs = {state.dialogsPage.dialogs}
                 messages = {state.dialogsPage.messages} addMessage={addMessage} onMessageChange={onMessageChange}/>
    )
}
