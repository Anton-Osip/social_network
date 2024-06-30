import {v3, v4} from "uuid";

export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
    my: boolean
}

export type StateType = {
    profilePage: {
        posts: PostsType[]
    }
    dialogsPage:
        {
            dialogs: DialogsType[]
            messages: MessagesType[]
        }
    sidebar: {}
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v4(), message: 'Hey, why nobody love me?', likeCount: 1},
            {id: v4(), message: 't\'s our new program! Hey!', likeCount: 25},
            {id: v4(), message: 'Hey, why nobody love me?', likeCount: 100},
        ],
    },
    dialogsPage: {
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
    },
    sidebar: {}


}