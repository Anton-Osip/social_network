import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, updateNewPostText} from "../../redux/state";

type  ProfileType = {
    newPostText: string
    posts: PostsType[]
    addNewPost: () => void
    updateNewPostText: (text: string) => void
}

export const Profile: React.FC<ProfileType> = ({posts, newPostText, addNewPost, updateNewPostText}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText = {newPostText} posts = {posts} addNewPosts = {addNewPost}
                     updateNewPostText = {updateNewPostText}/>
        </div>
    )
}