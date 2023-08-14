import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
        <div>
          <img className={s.image} src='./image-main.jpg' alt='main-im' />
        </div>
        <div className={s.item}>
          Ava + description
        </div>
        <MyPosts />
      </div>
    )
}

export default Profile