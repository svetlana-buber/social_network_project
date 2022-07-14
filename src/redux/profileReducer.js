import {getCurrentUser, getStatus, updateStatus} from '../api/api';

let ADD_POST = 'ADD-POST';
let SET_FETCHING = 'SET_FETCHING';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts : [
        {id:1, message: "message 1", countLike: 23},
        {id:2, message: "message 2", countLike: 4},
    ],
    profile : null,
    status : '',
    isFetching: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: 
            let newPost = {
                id : 6,
                message : action.newPostText,
                countLike : 5
              }
            return {...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        case SET_FETCHING:
            return {...state, isFetching : action.isFetching};
        default:
            return state;
    }
}

export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) =>({type: SET_USER_STATUS, status})
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const getUserProfile = (profileID) => {
    return (dispatch) => {
        dispatch(setFetching(true));
        getCurrentUser(profileID)
        .then(response => { 
            dispatch(setUserProfile(response)); 
            dispatch(setFetching(false))
        })
    }
}

export const getUserStatus = (profileID) => {
    return (dispatch) => {
        getStatus(profileID)
        .then(response => { 
             dispatch(setUserStatus(response)); 
        })
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        updateStatus(status)
        .then(response => { 
            if (response.resultCode === 0){
                dispatch(setUserStatus(status)); 
            }
        })
    }
}
export default profileReducer;