import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = ({store}) => {
    const state = store.getState()

    const addMessage = () => {
        store.dispatch(addMessageAC())
    }
    const onMessageChange = (newMessage) => {
        store.dispatch(updateNewMessageTextAC(newMessage))
    }

    return (
        <Dialogs newMessageText = {state.dialogsPage.newMessageText} dialogs = {state.dialogsPage.dialogs}
                 messages = {state.dialogsPage.messages} addMessage = {addMessage} onMessageChange = {onMessageChange}/>
    )
}
