import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const CHANGE_AVATAR = 'CHANGE-AVATAR';

let initialState = {
    posts: [
        {id: 1, message: 'Привет, всем!', likesCount: 0},
        {id: 2, message: 'Пока, всем!', likesCount: 1},
    ],
    profile: null,
    status: ''
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {...state, posts: [...state.posts, newPost],};
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => {
                    // p.id != action.postId // почему ошибка??
                })
            };
        }
        case CHANGE_AVATAR: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        default:
            return state;
    }
};
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST, newPostText
    }
};
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE, profile
    }
};
export const setStatus = (status) => {
    return {
        type: SET_STATUS, status
    }
};
export const deletePost = (postId) => {
    return {
        type: DELETE_POST, postId
    }
};
export const changeAvatar = (photos) => {
    return {
        type: CHANGE_AVATAR, photos
    }
};


export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(changeAvatar(response.data.data.photos))
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    debugger
    let userId = getState().auth.userId;
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('edit-profile', {_error: message}));
        return Promise.reject(message)
    }
};

export default profileReducer;