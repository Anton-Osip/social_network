import React from 'react'
import styles from './Post.module.css'
import ava from '../../../../assets/ava.jpg'
import like from '../../../../assets/like.svg'


export const Post = ({message, likeCount}) => {
    return (
        <div className = {styles.post}>
            <div className = {styles.post__ava}>
                <img src = {ava} alt = "ava" className = {styles.post__avaImg}/>
            </div>
            <p className = {styles.post__text}>{message}</p>
            <div className = {styles.post__like}>
                <span className = {styles.post__likeNum}>{likeCount}</span>
                <img src = {like} alt = "like"/>
            </div>
        </div>
    )
}
