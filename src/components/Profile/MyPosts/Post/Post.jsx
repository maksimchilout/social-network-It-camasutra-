import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div className={s.avatarWrapper}>
                    <img className={s.avatar} src='./image/anonum.jpg' alt='ava'/>
                </div>
                <div className={s.postMessage}>{props.message}</div>


            </div>
            <div className={s.likes}>Likes: {props.likesCount}</div>
        </div>

    )
}

export default Post