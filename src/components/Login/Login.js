import React from "react";
import {Field, reduxForm } from 'redux-form';
import {required, maxLength } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";
import {connect} from 'react-redux';
import { login} from '../../redux/authReducer';
import { NavLink } from "react-router-dom";
import style from '../common/FormControls/FormControls.module.css';
const length = maxLength(20);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Email" component = {Input} validate={[required, length]} name = "email"/>
                </div>
                <div>
                    <Field placeholder="Password" component = {Input} validate={[required, length]} name ="password" type="password"/>
                </div>
                <div>
                    <Field type="checkbox" component = {Input} name = "rememberMe"/> remember me
                </div>
                {props.error && <div className={style.formSummaryError} >
                    {props.error}
                </div>}
                <div>
                    <button>Send</button>
                </div>
                <br/>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth){
        
        return (
            <NavLink to = {'/profile/'+ props.userId} >Wellcome <b>{props.userLogin} </b>to your profile!</NavLink>
        )
    }


    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    userId: state.auth.userId,
    userLogin: state.auth.login
})
export default connect(mapStateToProps, {login})(Login);