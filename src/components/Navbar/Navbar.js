import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile/2" className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Profile</NavLink>
            </div>
            <div>
                <NavLink to = "/dialogs" className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Messages</NavLink>
            </div>
            <div>
                <NavLink to = "/users" className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Users</NavLink>
            </div>
            <div>
                <NavLink to = "/news" className={({ isActive }) =>  isActive ? `${s.active}` : ""}>News</NavLink>
            </div>
            <div>
                <NavLink to = "/music"className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Music</NavLink>
            </div>
            <div>
                <NavLink to = "/setting" className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Setting</NavLink>
            </div>
            <br/>
            <div>
                <NavLink to = "/friends" className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Friends:</NavLink>
            </div>


            <div>
                <NavLink to = "/login"className={({ isActive }) =>  isActive ? `${s.active}` : ""}>Login</NavLink>
            </div>
        </nav>)
}

export default Navbar;