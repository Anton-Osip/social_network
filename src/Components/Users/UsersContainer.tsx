import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";
import {UsersStateType, UserType, followAC, unfollowAC, setUsersAC} from "../../redux/users-reducer";

type MapStateToPropsType = {
    usersPage: UsersStateType
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({usersPage: state.usersPage})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    follow: (userId: string) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId: string) => {
        dispatch(unfollowAC(userId))
    },
    setUsers: (users: UserType[]) => {
        dispatch(setUsersAC(users))
    },
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
