import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { PostsType} from "../../redux/state";

type  ProfileType = {
    posts: PostsType[]
    addNewPost:(postMessage: string)=>void
}

export const Profile: React.FC<ProfileType> = ({posts,addNewPost}: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {posts} addNewPosts={addNewPost}/>
        </div>
    )
}