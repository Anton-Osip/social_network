import React from 'react'
import styles from './Dialog.module.css'

type DialogProps = {
    name: string
}


export const Dialog:React.FC<DialogProps>=({name}: DialogProps)=> {
    return (
            <p className={styles.name}>
                {name}
            </p>
    )
}