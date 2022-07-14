import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile'
import clock from '../../assets/images/clock_black.gif';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profileReducer';
import {connect} from 'react-redux';
import {withAuthNavigate} from '../../hoc/withAuthNavigate';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

    componentDidMount(){ 
        // const profileID = window.location.pathname.replace("/profile/", ""); // withRouter is not exists in react-touter-dom version 6.0.0
        let profileID = this.props.userId; // profileID = 21482;

        if (!profileID){
            // debugger
            // this.props.history.push("/login");
            // profileID = window.location.pathname.replace("/profile/2", "/login/");
            // return <Navigate to="/login"/>
        }

        this.props.getUserProfile(profileID);
        this.props.getUserStatus(profileID);

    }
 
    render (){
        return (
            <>

                {this.props.isFetching === true ? <img src = {clock}/> : null }
                <div className = {s.content}>
                    <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateUserStatus}/>
                </div>
            </>)
    }
}


const mapStateToProps = (state) =>({
    profile : state.profilesPage.profile,
    status: state.profilesPage.status,
    userId: state.auth.userId,
    isAuth : state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus}),
    withAuthNavigate
)(ProfileContainer)