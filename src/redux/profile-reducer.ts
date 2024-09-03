import {ActionType, ProfilePageType} from "./state";
import {v4} from "uuid";

export const profileReducer = (state: ProfilePageType, action: ActionType) => {
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
