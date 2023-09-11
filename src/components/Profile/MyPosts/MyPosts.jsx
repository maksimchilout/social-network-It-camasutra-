import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {

    let postsElements = props.posts.map(el => <Post message={el.post} key={el.id} likesCount={el.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)

    }

    return (

        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>

            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}


const AddNewPost = (props) => {
    return (
        <form className={s.myPost} onSubmit={props.handleSubmit}>
            <div className={s.myPost__containerInput}>
                <Field className={s.myPost__input} name="newPostText" component="textarea"/>
            </div>
            <div className={s.myPost__containerButton}>
                <button className={s.myPost__button}>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPost)

export default MyPosts

