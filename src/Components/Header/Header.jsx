import React from 'react'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <header className = {styles.header}>
            <img className = {styles.header__img}
                 src = "https://raw.githubusercontent.com/Anton-Osip/Portfolio/388d3b58e59aebdff6485fe86e1c17eb0f44aa7d/src/assets/image/logo.svg"
                 alt = "Logo"/>
        </header>
    )
}
