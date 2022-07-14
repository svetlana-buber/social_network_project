import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import userReducer from './userReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer';

let reducers = combineReducers({
    profilesPage: profileReducer, 
    dialogsPage: dialogReducer,
    usersPage: userReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

 export default store;