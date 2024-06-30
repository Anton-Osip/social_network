import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'

type PostsType = {
    id: string
    message: string
    likeCount: number
}

export function MyPosts() {
    const postsData: PostsType[] = [
        {id: 'postData1', message: 'Hey, why nobody love me?', likeCount: 1},
        {id: 'postData2', message: 't\'s our new program! Hey!', likeCount: 25},
        {id: 'postData3', message: 'Hey, why nobody love me?', likeCount: 100},
    ]

    const postElements = postsData.map((post: PostsType) => <Post key = {post.id} message = {post.message}
                                                                  likeCount = {post.likeCount}/>)

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
                    <button type = "submit" className = {styles.newPost__btn}>
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