import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
    <div className={s.item}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src='./anonum.jpg' alt='ava' />
      </div>
      <div className={s.postMessage}>{props.message}</div>
      
    </div>
    )
}

export default Post