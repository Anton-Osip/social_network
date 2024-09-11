import {v4} from "uuid";


export type PostsType = {
    id: string
    message: string
    likeCount: number
}

export type DialogsStateType = {
    newPostText: string
    posts: PostsType[]
}

type AddPostACType = ReturnType<typeof addPostAC>
type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>

export type ProfileActionType = AddPostACType | UpdateNewPostTextACType

const initialState: DialogsStateType = {
    newPostText: 'blablabla',
    posts: [
        {id: v4(), message: 'Hey, why nobody love me?', likeCount: 1},
        {id: v4(), message: 't\'s our new program! Hey!', likeCount: 25},
        {id: v4(), message: 'Hey, why nobody love me?', likeCount: 100},
    ],
}

export const profileReducer = (state:DialogsStateType = initialState, action:ProfileActionType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: v4(),
                message: state.newPostText,
                likeCount: 0
            }
            return {...state, newPostText: '', posts: [...state.posts, newPost]}
        }
        case "UPDATE-NEW-POST-TEXT": {

            return {...state, newPostText: action.newText}
        }
        default:
            return state

    }
}

export const addPostAC = () => ({type: 'ADD-POST'}as const
)
export const updateNewPostTextAC = (newText:string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: newText}
)
