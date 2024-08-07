import {v4} from "uuid";


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
        newPostText: string
        posts: PostsType[]
    }
    dialogsPage:
        {
            dialogs: DialogsType[]
            messages: MessagesType[]
        }
    sidebar: {}
}

// export const state: StateType = {
//     profilePage: {
//         newPostText: 'blablabla',
//         posts: [
//             {id: v4(), message: 'Hey, why nobody love me?', likeCount: 1},
//             {id: v4(), message: 't\'s our new program! Hey!', likeCount: 25},
//             {id: v4(), message: 'Hey, why nobody love me?', likeCount: 100},
//         ],
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: v4(), name: 'Anton'},
//             {id: v4(), name: 'Yana'},
//             {id: v4(), name: 'Valera'},
//             {id: v4(), name: 'Viktor'},
//             {id: v4(), name: 'Pasha'},
//         ],
//         messages: [
//             {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: false},
//             {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: true},
//             {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: false},
//             {id: v4(), message: 'I am a normal pBLablabl I can have text and everything', my: true},
//         ],
//     },
//     sidebar: {}
// }
//
//
// let rerenderEntireTree: () => void = () => {
// }
//
// export const addNewPost = () => {
//     state.profilePage.posts.push({
//         id: v4(),
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     })
//     state.profilePage.newPostText = ''
//     rerenderEntireTree()
// }
//
// export const updateNewPostText = (text: string) => {
//     state.profilePage.newPostText = text
//     rerenderEntireTree()
// }
//
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }

export type StoreType = {
    _state: StateType
    getState:()=>StateType
    _callSubscriber: () => void
    addNewPost: () => void
    updateNewPostText: (text: string) => void
    subscribe: (observer: () => void) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: 'blablabla',
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
        sidebar: {},
    },
    _callSubscriber() {
    },
    getState(){
        return this._state
    },
    addNewPost() {
        this._state.profilePage.posts.push({
            id: v4(),
            message: this._state.profilePage.newPostText,
            likeCount: 0
        })
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },

    updateNewPostText(text) {
        this._state.profilePage.newPostText = text
        this._callSubscriber()
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }

}