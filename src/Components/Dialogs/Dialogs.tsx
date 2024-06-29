import styles from './Dialogs.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

type DialogsProps = {}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
    my: boolean
}


export const Dialogs: React.FC<DialogsProps> = (props: DialogsProps) => {
    let dialogs: DialogsType[] = [
        {id: 'dialog1', name: 'Anton'},
        {id: 'dialog2', name: 'Yana'},
        {id: 'dialog3', name: 'Valera'},
        {id: 'dialog4', name: 'Viktor'},
        {id: 'dialog5', name: 'Pasha'},
    ]
    let messages: MessagesType[] = [
        {id: 'message1', message: 'I am a normal pBLablabl I can have text and everything', my: false},
        {id: 'message2', message: 'I am a normal pBLablabl I can have text and everything', my: true},
        {id: 'message3', message: 'I am a normal pBLablabl I can have text and everything', my: false},
        {id: 'message4', message: 'I am a normal pBLablabl I can have text and everything', my: true},
    ]

    const dialogsElements = dialogs.map(dialog => <Dialog name = {dialog.name} key = {dialog.id}/>)
    const messagesElements = messages.map(message => (
        <Message message = {message.message} key = {message.id} my = {message.my}/>
    ))
    return (
        <div className = {styles.dialogs}>
            <h1 className = {styles.dialogs__title}>DIALOGS</h1>
            <div className = {styles.dialogs__inner}>
                <div className = {styles.dialogs____names}>{dialogsElements}</div>
                <div className = {styles.dialogs__messages}>{messagesElements}</div>
            </div>
            <form className = {styles.form}>
                <input
                    placeholder = "Messages"
                    type = "text"
                    className = {styles.form__input}
                />
                <button type = "submit" className = {styles.form__btn}>
                    SEND
                </button>
            </form>
        </div>
    )
}