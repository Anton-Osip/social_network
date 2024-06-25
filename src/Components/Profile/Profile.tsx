import React from 'react'
import ava from '../../assets/ava.jpg'
import styles from './Profile.module.css'

export function Profile() {
    return (
        <div className = {styles.content}>
            <div>
                <img
                    src = "https://assets-global.website-files.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg"
                    alt = "banner" className = {styles.banner__img}/>
            </div>
            <div className = {styles.me}>
                <div className = {styles.me__ava}>
                    <img src = {ava} alt = "ava" className = {styles.me__avaImg}/>
                </div>
                <div className = {styles.me__info}>
                    <h3 className = {styles.me__name}>Osipchyk Anton</h3>

                    <p className = {styles.me__text}>Date of Birth: 2 january</p>
                    <p className = {styles.me__text}>City: Minsk</p>
                    <p className = {styles.me__text}>
                        City: Minsk Education: BNTU '21
                    </p>
                    <p className = {styles.me__text}>
                        Web Site: https://it-kamasutra.com
                    </p>
                </div>
            </div>
            <div className = {styles.newPost}>
                <h3 className = {styles.newPost__title}>My posts</h3>
                <form className = {styles.newPost__form}>
                    <input
                        type = "text"
                        placeholder = "your news..."
                        className = {styles.newPost__input}
                    />
                    <button className = {styles.newPost__btn}>Send</button>
                </form>
            </div>
            <div className = {styles.posts}>
                <div className = {styles.post}>
                    <div className = {styles.post__ava}>
                        <img
                            src = {ava}
                            alt = "ava"
                            className = {styles.post__avaImg}
                        />
                    </div>
                    <p className = {styles.post__text}>
                        Hey, why nobody love me?
                    </p>
                </div>
                <div className = {styles.post}>
                    <div className = {styles.post__ava}>
                        <img
                            src = {ava}
                            alt = "ava"
                            className = {styles.post__avaImg}
                        />
                    </div>
                    <p className = {styles.post__text}>
                        It's our new program! Hey!
                    </p>
                </div>
            </div>
        </div>
    )
}