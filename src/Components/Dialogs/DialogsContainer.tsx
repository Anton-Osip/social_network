import {
    DialogsStateType,
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({dialogsPage: state.dialogsPage})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    sendMessage: () => {
        dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body: string) => {
        dispatch(updateNewMessageBodyCreator(body))
    }
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
