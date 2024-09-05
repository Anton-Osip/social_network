import React from 'react'
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";

type  MyPostsType = {
    store: any
}

export const MyPostsContainer: React.FC<MyPostsType> = ({store}: MyPostsType) => {
    const state = store.getState()

    const addPosts = () => {
        store.dispatch(addPostAC())
    }
    const onPostChange = (newPost: string) => {
        store.dispatch(updateNewPostTextAC(newPost))
    }
    return (
        <MyPosts newPostText = {state.profilePage.newPostText} posts = {state.profilePage.posts}
                 updateNewPost = {onPostChange} addPost = {addPosts}/>
    )
}