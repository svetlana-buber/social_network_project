import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return(
        <div className={s.item}>
            <div className={s.dialog + ' ' + s.active}>
                        <NavLink to={"/dialogs/" + props.id}> 
                            <img src = 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png'/> 
                            {props.name} 
                        </NavLink>
            </div>
        </div>
    )
}

export default DialogItem;