import React from 'react'
import {addPostAC, updateNewPostTextAC} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState()
                const addPosts = () => {
                    store.dispatch(addPostAC())
                }
                const onPostChange = (newPost) => {
                    store.dispatch(updateNewPostTextAC(newPost))
                }
                return (
                    <MyPosts
                        newPostText = {state.profilePage.newPostText}
                        posts = {state.profilePage.posts}
                        updateNewPost = {onPostChange}
                        addPost = {addPosts}
                    />)
            }}

        </StoreContext.Consumer>

    )
}
