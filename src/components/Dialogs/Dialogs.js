import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from 'react-router-dom';
import {Field, reduxForm } from 'redux-form';
import { TextArea } from "../common/FormControls/FormControls";
import { maxLength, required } from "../../utils/validators/validators";

const length = maxLength(10);
const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name= {d.name} id= {d.id} key={d.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)


    const addNewMessage = (values) => {
        props.addNewMessage(values.newMessageBody);
    }
    
    if (!props.isAuth) {
        return <Navigate to="/login"/>
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.newMessage}>
                    <h3>New message</h3>
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <div>
                <Field component = {TextArea} 
                validate={[required, length]}
                name = 'newMessageBody' placeholder='enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({form: 'AddMessage'})(AddMessageForm)

export default Dialogs;