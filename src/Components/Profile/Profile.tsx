import React from 'react'

import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../index";

type  ProfileType = {
    posts: PostsType[]
}

export const Profile: React.FC<ProfileType> = ({posts}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}