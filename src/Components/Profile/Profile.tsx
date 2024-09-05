import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType} from "../../redux/store";

type  ProfileType = {
    newPostText: string
    posts: PostsType[]
    dispatch: (action: ActionType) => void
}

export const Profile: React.FC<ProfileType> = ({posts, newPostText,dispatch}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts newPostText = {newPostText} posts = {posts} dispatch = {dispatch}/>
        </div>
    )
}
