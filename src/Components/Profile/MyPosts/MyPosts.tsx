import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'
import {PostsType} from "../../../redux/state";

type  MyPostsType = {
    posts: PostsType[]
}

export const MyPosts: React.FC<MyPostsType> = ({posts}: MyPostsType) => {
    const postElements = posts.map((post: PostsType) => <Post key = {post.id} message = {post.message}
                                                              likeCount = {post.likeCount}/>)
const addPosts=()=>{
alert('add')
}
    return (
        <div>
            <div className = {styles.newPost}>
                <h3 className = {styles.newPost__title}>My posts</h3>
                <form className = {styles.newPost__form}>
                    <input
                        type = "text"
                        placeholder = "your news..."
                        className = {styles.newPost__input}
                    />
                    <button onClick={addPosts} type = "submit" className = {styles.newPost__btn}>
                        Send
                    </button>
                </form>
            </div>
            <div className = {styles.posts}>
                {postElements}
            </div>
        </div>
    )
}