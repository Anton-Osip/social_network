import {ActionType, ProfilePageType} from "./store";
import {v4} from "uuid";

const initialState = {
    newPostText: 'blablabla',
    posts: [
        {id: v4(), message: 'Hey, why nobody love me?', likeCount: 1},
        {id: v4(), message: 't\'s our new program! Hey!', likeCount: 25},
        {id: v4(), message: 'Hey, why nobody love me?', likeCount: 100},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            state.posts.push({
                id: v4(),
                message: state.newPostText,
                likeCount: 0
            })
            state.newPostText = ''
            return state
        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.newText
            return state
        }
        default:
            return state

    }
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (newText: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText} as const)
