import React from 'react'
import styles from './Post.module.css'
import ava from '../../../../assets/ava.jpg'
import like from '../../../../assets/like.svg'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post: React.FC<PostPropsType> = ({message, likeCount}: PostPropsType) => {
    return (
        <div className = {styles.post}>
            <div className = {styles.post__ava}>
                <img src = {ava} alt = "ava" className = {styles.post__avaImg}/>
            </div>
            <p className = {styles.post__text}>{message}</p>
            <div className = {styles.post__like}>
                <img src = {like} alt = "like"/>
                <span className = {styles.post__likeNum}>{likeCount}</span>
            </div>
        </div>
    )
}