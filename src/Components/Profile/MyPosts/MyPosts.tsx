import React, {ChangeEvent} from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from "../../../redux/store";

type  MyPostsType = {
    newPostText: string
    posts: PostsType[]
    updateNewPost: (newPost: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, newPostText, updateNewPost, addPost}: MyPostsType) => {

    const postElements = posts.map((post: PostsType) => <Post key = {post.id} message = {post.message}
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
