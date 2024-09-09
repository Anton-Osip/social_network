import React from 'react'
import banner from '../../../assets/banner.jpg'
import ava from '../../../assets/ava.jpg'
import styles from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        < >
            <div>
                <img src = {banner} alt = "banner" className = {styles.banner__img}/>
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
                        Web Site:{' '}
                        <a href = "https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BE%D1%81%D0%B8%D0%BF%D1%87%D0%B8%D0%BA-729784216/">
                            https://www.linkedin.com/
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
