import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={s.itemMessage}>
            <div className={s.imgMessage}>
                <img src = 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png'/>
            </div>
            <div className= {s.message}>{props.message}</div>   
        </div>
    )
}

export default Message;