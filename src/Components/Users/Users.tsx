import {FC} from "react";
import styles from "../Users/Users.module.css";
import userImg from '../../assets/user.jpeg'
import {UserType} from "../../redux/users-reducer";

type usersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
}

export const Users: FC<usersPropsType> = (props) => {

    let pagesCount: number = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <h1 className = {styles.users__title}>USERS</h1>
        <div className = {styles.pagination}>
            {pages.map(p => <div key = {p} onClick = {() => props.onPageChanged(p)}
                                 className = {props.currentPage === p ?
                                     styles.selectedPage : ''}>
                {p}
            </div>)}
        </div>
        <div>
            {props.users.map(u => (
                <div key = {u.id}>
                    <span>
                        <div>
                            <img className = {styles.image} src = {u.photos.large || userImg} alt = "user"/>
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
