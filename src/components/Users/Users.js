import React from "react";
import s from "./Users.module.css";
import icon from "../../assets/images/icon.png"
import { NavLink } from "react-router-dom";


let Users = (props) => {

    let numberOfPages = (Math.ceil(props.totalCount / props.sizeOfPage) + 1);
    let numbers =[];
    for (let i=1; i< 11; i++)
    {
        numbers.push(i);
    }

    return(
        <div className={s.users}>
            Total Users = {props.totalCount}
            <br/>
            numberOfPages = {numberOfPages}
            <br/>
            currentPage  = {props.currentPage}
            <br/>
            <button disabled={props.inProcess}>True</button>
            <button disabled={!props.inProcess}>False</button>

            <h3>Users</h3>
            {numbers.map(n => <span  className = {props.currentPage === n ? s.currentNumber :""}
                    onClick= {(e) => {props.changePageOfUsers(n)}}>{n} </span>)}

            {props.users.map(u => <div key={u.id} className={s.oneUser}>
                <div>
                    <NavLink to={"/profile/" + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : icon} />
                    </NavLink>
                </div>
                <div>{u.followed ? <button disabled={props.inProcess} onClick={() => {

                        props.unfollowSuccess(u.id)
                    } }>unfollow</button>

                    : <button  onClick={() => {
                        props.followSuccess(u.id)
                         } }>follow</button>}</div>

                <div> {u.name}</div>
                <div> {u.status}</div>
                <div> u.location.city</div>
                <div> u.location.country</div>
            </div>)}
        </div>
    )
}

export default Users;