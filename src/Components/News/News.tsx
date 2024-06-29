import styles from './News.module.css'

type NewsType = {}
export const News: React.FC<NewsType> = (props: NewsType) => {
    return (
        <div className = {styles.news}>
            <h1 className = {styles.news__title}>News</h1>
        </div>
    )
}