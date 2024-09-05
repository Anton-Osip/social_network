import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {ActionType, DialogsPageType, ProfilePageType} from "./store";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const store: Store<EmptyObject & {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}, ActionType> = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
