// import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator} from "../../redux/dialogReducer";
import {connect} from 'react-redux';
import {withAuthNavigate} from '../../hoc/withAuthNavigate';
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage
    }
}

let mapDispatchToProps =(dispatch) => {
    return {
        addNewMessage : (newMessageBody) => {dispatch(addMessageActionCreator(newMessageBody))},
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
)(Dialogs)