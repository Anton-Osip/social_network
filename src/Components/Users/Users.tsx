import React, {FC} from "react";
import styles from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import userImg from '../../assets/user.jpeg'

import axios from "axios";


export const Users: FC<UsersPropsType> = (props) => {

    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {
                    props.setUsers(response.data.items)
                })
            // props.setUsers([
            //     {
            //         id: v1(),
            //         photoUrl: user,
            //         followed: true,
            //         fullName: 'Anton Osipchyk',
            //         status: 'I am a boss',
            //         location: {city: 'Minsk', country: 'Belarus'}
            //     },
            //     {
            //         id: v1(),
            //         photoUrl: user,
            //         followed: false,
            //         fullName: 'Sasha',
            //         status: 'I am a boss',
            //         location: {city: 'Moscow', country: 'Russia'}
            //     },
            //     {
            //         id: v1(),
            //         photoUrl: user,
            //         followed: false,
            //         fullName: 'Andrew',
            //         status: 'I am a boss',
            //         location: {city: 'Kiev', country: 'Ukraine'}
            //     },])
        }
    }


    return <div>
        <h1 className = {styles.users__title}>USERS</h1>
        <button onClick={getUsers}>GET USERS</button>
        <div>
            {props.usersPage.users.map(u => (
                <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photos.large || userImg} alt = "user"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick = {() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick = {() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'Minsk'}</div>
                            <div>{'Belarus'}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    </div>
}
