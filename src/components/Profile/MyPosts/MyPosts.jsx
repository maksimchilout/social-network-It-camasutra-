import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="lorem ipsum dolor"/>
                <Post message="Why anyone love me?"/>
                <Post message="hi, how are you?"/>
                <Post/>
                <Post message="This is last message today"/>
            </div>
        </div>
    )
}

export default MyPosts