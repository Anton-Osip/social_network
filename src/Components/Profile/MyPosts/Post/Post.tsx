import React from 'react'
import styles from './Post.module.css'
import ava from '../../../../assets/ava.jpg'
import like from '../../../../assets/like.svg'

export function Post() {
    return (
        <div className = {styles.post}>
            <div className = {styles.post__ava}>
                <img src = {ava} alt = "ava" className = {styles.post__avaImg}/>
            </div>
            <p className = {styles.post__text}>Hey, why nobody love me?</p>
            <div className = {styles.post__like}>
                <img src = {like} alt = "like"/>
                <span className = {styles.post__likeNum}>10</span>
            </div>
        </div>
    )
}