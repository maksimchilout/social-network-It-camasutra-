import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
          My posts
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={s.posts}>
            <Post message="lorem ipsum dolor" />
            <Post message="Why anyone love me?" />
            <Post message="hi, how are you?" />
            <Post />
            <Post message="This is last message today" />
          </div>
        </div>
    )
}

export default MyPosts