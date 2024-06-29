import styles from './Music.module.css'

type MusicType = {}
export const Music: React.FC<MusicType> = (props: MusicType) => {
    return (
        <div className = {styles.music}>
            <h1 className = {styles.music__title}>Music</h1>
        </div>
    )
}