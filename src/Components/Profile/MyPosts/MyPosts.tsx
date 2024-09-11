import React, {ChangeEvent, FC} from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'
import {DialogsStateType} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    profilePage: DialogsStateType
    updateNewPost: (text: string) => void
    addPost: () => void
}

export const MyPosts: FC<MyPostsPropsType> = (props) => {
    const {profilePage, updateNewPost, addPost} = props

    const postElements = profilePage.posts.map((post) => <Post key = {post.id} message = {post.message}
                                                               likeCount = {post.likeCount}/>)

    const onAddPost = () => {
        addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewPost(e.currentTarget.value)
    }
    return (
        <div>
            <div className = {styles.newPost}>
                <h3 className = {styles.newPost__title}>My posts</h3>
                <div className = {styles.newPost__form}>
                    <input
                        value = {profilePage.newPostText}
                        onChange = {onPostChange}
                        type = "text"
                        placeholder = "your news..."
                        className = {styles.newPost__input}
                    />
                    <button onClick = {onAddPost} className = {styles.newPost__btn}>
                        Send
                    </button>
                </div>
            </div>
            <div className = {styles.posts}>
                {postElements}
            </div>
        </div>
    )
}
