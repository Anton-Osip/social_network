import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from "../../../redux/state";

type  MyPostsType = {
    posts: PostsType[]
    addNewPosts: (postMessage: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({posts, addNewPosts}: MyPostsType) => {
    const newPostElement = React.createRef<HTMLInputElement>()
    const postElements = posts.map((post: PostsType) => <Post key = {post.id} message = {post.message}
                                                              likeCount = {post.likeCount}/>)
    const addPosts = () => {
        if (newPostElement.current) {
            addNewPosts(newPostElement.current?.value)
        }
    }
    return (
        <div>
            <div className = {styles.newPost}>
                <h3 className = {styles.newPost__title}>My posts</h3>
                <div className = {styles.newPost__form}>
                    <input
                        ref = {newPostElement}
                        type = "text"
                        placeholder = "your news..."
                        className = {styles.newPost__input}
                    />
                    <button onClick = {addPosts} className = {styles.newPost__btn}>
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