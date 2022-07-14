import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className= {s.header}>
            <img src = 'https://cdn.logo.com/hotlink-ok/logo-social.png'/>
            {props.isAuth ? 
            <div>{props.login} - <button onClick={props.logout}>Logout</button> </div>
            : <NavLink to = {'/login'} className={s.loginBlock}>Login</NavLink>}
            
        </header>)
}

export default Header;