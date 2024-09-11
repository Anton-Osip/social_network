import {v4} from "uuid";

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
    my: boolean
}

export type DialogsStateType = {
    newMessageText: string
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const initialState: DialogsStateType = {
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

type SendMessageCreatorType = ReturnType<typeof sendMessageCreator>
type UpdateNewMessageBodyCreatorType = ReturnType<typeof updateNewMessageBodyCreator>

export type DialogsActionType = SendMessageCreatorType | UpdateNewMessageBodyCreatorType

export const dialogsReducer = (state: DialogsStateType = initialState, action: DialogsActionType) :DialogsStateType=> {
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

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body
} as const)
