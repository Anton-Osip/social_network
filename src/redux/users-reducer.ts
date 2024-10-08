export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | null,
        large: string | null
    },
    status: string | null,
    followed: boolean
    location: {
        city: string
        country: string
    }
}

export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: UsersStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

type FollowACType = ReturnType<typeof follow>
type UnfollowACType = ReturnType<typeof unfollow>
type SetUsersACType = ReturnType<typeof setUsers>
type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>

export type UsersActionType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType

export const usersReducer = (state: UsersStateType = initialState, action: UsersActionType): UsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: number) => ({type: 'FOLLOW', userId} as const)
export const unfollow = (userId: number) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING', isFetching
} as const)
