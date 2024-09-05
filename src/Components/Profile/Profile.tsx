import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, PostsType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type  ProfileType = {
    store: any
}

export const Profile: React.FC<ProfileType> = ({store}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {store}/>
        </div>
    )
}
