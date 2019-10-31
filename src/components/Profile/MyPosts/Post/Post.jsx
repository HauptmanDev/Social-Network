import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYdBq_hOb9UcY1YVQXA1gI5c9TyLF997iZKhGZuSupRitkTwRoQ'/>
            {props.message}
            <br/>
            <span>Like</span> {props.likesCount}
        </div>
    );
};
export default Post;