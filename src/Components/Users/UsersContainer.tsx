import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow,
    UsersStateType,
    UserType,
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    usersPage: UsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users = {this.props.usersPage.users}
                   currentPage = {this.props.currentPage}
                   pageSize = {this.props.pageSize}
                   totalUsersCount = {this.props.totalUsersCount}
                   follow = {this.props.follow}
                   unfollow = {this.props.unfollow}
                   onPageChanged = {this.onPageChanged}/>
        </>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    usersPage: state.usersPage,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
//     follow: (userId: number) => {
//         dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//         dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: UserType[]) => {
//         dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//         dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//         dispatch((setTotalUsersCountAC(totalUsersCount)))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//         dispatch((toggleIsFetchingAC(isFetching)))
//     }
// })

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)

