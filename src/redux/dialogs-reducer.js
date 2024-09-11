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
        case "UPDATE-NEW-MESSAGE-BODY": {
            return {...state, newMessageText: action.body}
        }
        case "SEND-MESSAGE": {
            const newMessage = {
                id: v4(),
                message: state.newMessageText,
                my: true
            }
            return {...state, newMessageText: '', messages: [...state.messages, newMessage]}
        }
        default:
            return state

    }

}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
})
