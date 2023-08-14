import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
    <div className={s.item}>
      <div className={s.avatarWrapper}>
        <img className={s.avatar} src='./anonum.jpg' alt='ava' />
      </div>
      <div className={s.postMessage}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus.</div>
      
    </div>
    )
}

export default Post