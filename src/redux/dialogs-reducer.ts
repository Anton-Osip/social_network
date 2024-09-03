import {ActionType, DialogsPageType,} from "./state";
import {v4} from "uuid";

export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newText
            return state
        }
        case "ADD-MESSAGE": {
            state.messages.push({
                id: v4(),
                message: state.newMessageText,
                my: true
            })
            state.newMessageText = ''
            return state
        }
        default:
            return state

    }

}

export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC = (newText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
} as const)
