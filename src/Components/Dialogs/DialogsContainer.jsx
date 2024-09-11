import {
    sendMessageCreator,
    updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({dialogsPage: state.dialogsPage})

const mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {
        dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
        dispatch(updateNewMessageBodyCreator(body))
    }
})

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
