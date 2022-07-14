import { stopSubmit } from 'redux-form';
import {getAuthMe , loginApi, logoutApi} from '../api/api';
let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
            return {...state,
                    ...action.payload, 
                    // isAuth: true

            };
       
        default:
            return state;
    }
}


export const setUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload : {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => {
    getAuthMe()
    .then(response => { 
        
        if (response.resultCode === 0) {
            let {id, email, login} = response.data;
            dispatch(setUserData(id, email, login, true));
        }
    } )
}

export const login = (email, password, rememberMe) => (dispatch) => {
    loginApi(email, password, rememberMe)
    .then(response => { 
        if (response.resultCode === 0) {
            dispatch(getAuthUserData());
        } 
        else
        {
            let message = (response.messages.length) > 0 ? response.messages[0] : "Some error";
            dispatch(stopSubmit("Login", {_error: message} ));
        }
    } )
}

export const logout = () => (dispatch) => {
    logoutApi()
    .then(response => { 
        if (response.resultCode === 0) {
            debugger
            dispatch(setUserData(null, null, null, false)); 
        }
    } )
} 

export default authReducer;