import React from "react";
import s from './ProfileInfo.module.css';
import clock from '../../../assets/images/clock_black.gif';
import icon from '../../../assets/images/icon.png';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile){
        return <img src = {clock}/>
    } 
    return(
            <div>
                
                {/* <div className= {s.topImg}>
                    <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchGECg_SqSzHmtvZMsbiQgednQzGwjm9tlg&usqp=CAU'/>
                </div> */}
                <div className={s.ava}>
                    <img src = {props.profile.photos.small ? props.profile.photos.small : icon} />
                    <ProfileStatusWithHooks status= {props.status ? props.status : "Hello my friends"} updateStatus ={props.updateStatus}/>
                    {/* <ProfileStatus status= {props.status ? props.status : "Hello my friends"} updateStatus ={props.updateStatus}/> */}
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.aboutMe}</div>
                    <div>{props.profile.lookingForAJob ? "yes" : "no"}</div>
                    <div>{props.profile.contacts.twitter}</div>
                </div>
            </div>
        )
    
}

export default ProfileInfo;