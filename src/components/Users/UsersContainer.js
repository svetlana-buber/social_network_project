import React from 'react';
import {connect} from 'react-redux';
import Users from './Users';
import {follow, unfollow, setCurrentPage, setInProcess, getUsersThunk, unfollowSuccess,followSuccess} from '../../redux/userReducer';
import clock from '../../assets/images/clock_black.gif';
import { compose } from 'redux';
import {withAuthNavigate} from '../../hoc/withAuthNavigate';
import {getUsers, getTotalCount, getCurrentPage, getSizeOfPage, getIsFetching, getInProcess} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount(){
        this.props.getUsersThunk(this.props.currentPage, this.props.sizeOfPage);
    }

    changePageOfUsers = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsersThunk(this.props.currentPage, this.props.sizeOfPage);
    }
    render(){ 
        
        return(<>
            {this.props.isFetching === true ? <img src = {clock}/> : null}
            <Users totalCount = {this.props.totalCount}
                   sizeOfPage = {this.props.sizeOfPage}
                   currentPage  = {this.props.currentPage}
                   changePageOfUsers ={this.changePageOfUsers}
                   users ={this.props.users}
                   unfollow ={this.props.unfollow}
                   follow ={this.props.follow}
                   inProcess = {this.props.inProcess}
                   setInProcess = {this.props.setInProcess}
                   unfollowSuccess = {this.props.unfollowSuccess}
                   followSuccess = {this.props.followSuccess}
            />
        </>
        )
    }
    
}

const mapStateToProps = (state) => {
    return (
        {
            users: getUsers(state),
            totalCount: getTotalCount(state),
            currentPage: getCurrentPage(state),
            sizeOfPage: getSizeOfPage(state),
            isFetching: getIsFetching(state),
            inProcess: getInProcess(state)
        }
    );
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, setInProcess, getUsersThunk, unfollowSuccess, followSuccess}),
    withAuthNavigate
)(UsersContainer)
