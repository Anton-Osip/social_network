import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


const mapStateToProps = (state) => ({
    profilePage: state.profilePage,
})
const mapDispatchToProps = (dispatch) => ({
    updateNewPost: (newPost) => {
        dispatch(updateNewPostTextAC(newPost))
    },
    addPost: () => {
        dispatch(addPostAC())
    }
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
