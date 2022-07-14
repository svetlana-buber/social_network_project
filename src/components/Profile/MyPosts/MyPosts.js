import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm } from 'redux-form';
import { required, maxLength, minLength } from '../../../utils/validators/validators';
import { TextArea } from '../../common/FormControls/FormControls';

let length = maxLength(10)

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message= {p.message} countLike= {p.countLike}/>)
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit ={onAddPost} />
            <div className = {s.posts}>
                {postsElements}
            </div>
        </div>)
}

const AddNewPostForm = (props)=> {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name="newPostText" component = {TextArea} placeholder="Enter your message:" validate={[required, length]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
        </form>
    )
}


const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;