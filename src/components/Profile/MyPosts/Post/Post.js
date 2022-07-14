import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className = {s.item}>
                    <img src = 'https://hostenko.com/wpcafe/wp-content/uploads/rndavatar.png'/>
                    {props.message}
                    <div>
                        <span>like </span>{props.countLike}
                    </div>
            </div>
            )
}   

export default Post;