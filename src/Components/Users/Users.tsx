import React, {FC} from "react";
import styles from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import {v1} from "uuid";
import user from "../../assets/user.jpeg";


export const Users: FC<UsersPropsType> = (props) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoUrl: user,
                followed: true,
                fullName: 'Anton Osipchyk',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: user,
                followed: false,
                fullName: 'Sasha',
                status: 'I am a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoUrl: user,
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss',
                location: {city: 'Kiev', country: 'Ukraine'}
            },])
    }


    return <div>
        <h1 className = {styles.users__title}>USERS</h1>
        <div>
            {props.usersPage.users.map(u => (
                <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photoUrl} alt = "user"/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    </div>
}
