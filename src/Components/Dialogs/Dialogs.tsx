import styles from './Dialogs.module.css'

type DialogsType = {}
export const Dialogs: React.FC<DialogsType> = (props: DialogsType) => {
    return (
        <div className = {styles.dialogs}>
            <h1 className = {styles.dialogs__title}>DIALOGS</h1>
            {/* <div className={styles.dialogs__inner}>
				<div className={styles.dialogs____names}></div>
				<div className={styles.dialogs__messages}></div>
				<form className={styles.form}>
					<input
						type='text'
						className={styles.form__input}
					/>
					<button  type='submit' className={styles.form__btn}>
						SEND
					</button>
				</form>
			</div> */}
        </div>
    )
}