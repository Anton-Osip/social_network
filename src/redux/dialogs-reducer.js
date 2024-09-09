import {v4} from "uuid";

const initialState = {
    newMessageText: 'newMessageText',
    dialogs: [
        {id: v4(), name: 'Anton'},
        {id: v4(), name: 'Yana'},
        {id: v4(), name: 'Valera'},
        {id: v4(), name: 'Viktor'},
        {id: v4(), name: 'Pasha'},
    ],
    messages: [
        {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: false},
        {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: true},
        {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: false},
        {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: true},
    ],
}

export const dialogsReducer = (state = initialState, action) => {
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

export const addMessageAC = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextAC = (newText) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
})
