import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет, всем!', likesCount: 0},
                {id: 2, message: 'Пока, всем!', likesCount: 1},
            ],
            newPostText: 'Add post'
        },
        dialogsPage: {
            dialogs: [],
            messages: [],
            newMessageBody: ''
        },
        usersPage: {},
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('state')
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.usersPage = usersReducer(this._state.usersPage, action);
        this._state.sidebar = sidebarReducer();
        this._callSubscriber(this._state);
    }
};


window.state = store;
export default store;