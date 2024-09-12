import React from "react";
import styles from "../Users/Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import userImg from '../../assets/user.jpeg'

import axios from "axios";

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <h1 className = {styles.users__title}>USERS</h1>
            <div className = {styles.pagination}>
                {pages.map(p => <div key = {p} onClick = {() => this.onPageChanged(p)}
                                     className = {this.props.currentPage === p ?
                                         styles.selectedPage : ''}>
                    {p}
                </div>)}
                {/*<span className = {styles.selectedPage}>1</span>*/}
                {/*<span>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
            </div>
            <div>
                {this.props.usersPage.users.map(u => (
                    <div key = {u.id}>
                    <span>
                        <div>
                            <img className = {styles.image} src = {u.photos.large || userImg} alt = "user"/>
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
