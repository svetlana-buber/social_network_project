import {requestUsers, getCurrentUser, followUser, unfollowUser} from '../api/api';

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_FETCHING = 'SET_FETCHING';
let SET_IN_PROCESS = 'SET_IN_PROCESS'

let initialState = {
    users : [],
    sizeOfPage: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    inProcess: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {...state,
                    users: state.users.map((u) => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    })
            };
        case UNFOLLOW: 
            return {...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: 
            return {...state, users: [ ...action.users]};
            // return {...state, users: [...state.users, ...action.users]};
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount};
        case SET_CURRENT_PAGE:
            return {... state, currentPage: action.currentPage};
        case SET_FETCHING:
            return {...state, isFetching : action.isFetching};
        case SET_IN_PROCESS:
            return {...state, inProcess : action.inProcess};
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => {
  return {type: UNFOLLOW, userId}
};
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching: isFetching});
export const setInProcess = (inProcess) => ({type: SET_IN_PROCESS, inProcess: inProcess});

export const getUsersThunk = (currentPage, sizeOfPage) => {
    return(dispatch) => {
    dispatch(setFetching(true));
    requestUsers(currentPage, sizeOfPage)
    .then(response => { dispatch(setUsers(response.items)); 
            dispatch(setTotalCount(response.totalCount)); 
            dispatch(setFetching(false))})
    }
}

export const unfollowSuccess = (userId) => {
    return(dispatch) => {
        dispatch(setInProcess(true))
        unfollowUser(userId)
        .then(response => {
            if (response.data.resultCode == 0) {                       
                dispatch(unfollow(userId));
            }
            dispatch(setInProcess(false))
        })
    }
}

export const followSuccess = (userId) => {
    return(dispatch) => {
        dispatch(setInProcess(true))
        followUser(userId)
        .then(response => {
            if (response.data.resultCode == 0) {                       
                dispatch(follow(userId));
            }
            dispatch(setInProcess(false))
        })
    }
}

export default userReducer;