
export type UserType = {
    id: string
    photoUrl: string
    fullName: string
    status: string
    followed: boolean
    location: {
        city: string
        country: string
    }
}

export type UsersStateType = {
    users: UserType[]
}

const initialState: UsersStateType = {
    users: []
}

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>

export type UsersActionType = FollowACType | UnfollowACType | SetUsersACType

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        }
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
