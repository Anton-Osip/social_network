import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, ProfileStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    profilePage: ProfileStateType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPost: (newPost: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profilePage: state.profilePage,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    updateNewPost: (newPost: string) => {
        dispatch(updateNewPostTextAC(newPost))
    },
    addPost: () => {
        dispatch(addPostAC())
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
