import React from "react";
import styles from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import userImg from '../../assets/user.jpeg'

import axios from "axios";

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div>
            <h1 className = {styles.users__title}>USERS</h1>
            <div>
                {this.props.usersPage.users.map(u => (
                    <div key = {u.id}>
                    <span>
                        <div>
                            <img src = {u.photos.large || userImg} alt = "user"/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick = {() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick = {() => {
                                    this.props.follow(u.id)
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
}
