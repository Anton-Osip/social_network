import React from 'react'
import styles from './Navbar.module.css'

export const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li><a href = "#aaa"  className={styles.item}>Profile</a></li>
                <li><a href = "#aaa"  className={styles.item}>Messages</a></li>
                <li><a href = "#aaa"  className={styles.item}>News</a></li>
                <li><a href = "#aaa"  className={styles.item}>Music</a></li>
            </ul>
        </nav>
    )
}