import React from 'react'
import styles from './MyPosts.module.css'
import {Post} from './Post/Post'

export function MyPosts() {
    return (
        <div>
            <div className={styles.newPost}>
                <h3 className={styles.newPost__title}>My posts</h3>
                <form className={styles.newPost__form}>
                    <input
                        type='text'
                        placeholder='your news...'
                        className={styles.newPost__input}
                    />
                    <button type='submit' className={styles.newPost__btn}>
                        Send
                    </button>
                </form>
            </div>
            <div className={styles.posts}>
                <Post message='Hey, why nobody love me?' likeCount={10} />
                <Post message="It's our new program! Hey!" likeCount= {25} />
            </div>
        </div>
    )
}