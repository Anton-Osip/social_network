export type SidebarStateType = {}

export type SidebarActionType = {
    type: string;
}

const initialState: SidebarStateType = {}

export const sidebarReducer = (state: SidebarStateType = initialState, action: SidebarActionType) => {
    switch (action.type) {

        default:
            return state

    }

}


