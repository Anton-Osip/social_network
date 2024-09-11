import {v4} from "uuid";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


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


export const store = {
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
        },
        sidebar: {},
    },
    _callSubscriber() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber()
    }
}

export const addPostAC = () => ({type: 'ADD-POST'})
export const updateNewPostTextAC = (newText) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText})


