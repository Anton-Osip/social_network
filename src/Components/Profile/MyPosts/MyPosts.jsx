import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'


export const MyPosts = ({posts, newPostText, updateNewPost, addPost}) => {

    const postElements = posts.map((post) => <Post key = {post.id} message = {post.message}
                                                   likeCount = {post.likeCount}/>)

    const onAddPost = () => {
        addPost()
    }
    const onPostChange = (e) => {
        updateNewPost(e.currentTarget.value)
    }
    return (
        <div>
            <div className = {styles.newPost}>
                <h3 className = {styles.newPost__title}>My posts</h3>
                <div className = {styles.newPost__form}>
                    <input
                        value = {newPostText}
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
