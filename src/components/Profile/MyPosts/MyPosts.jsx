import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    
    let postsElements = props.posts.map(el => <Post message={el.post} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }
    
    return (
        
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.myPost}>
                <div className={s.myPost__containerInput}>
                    <textarea  className={s.myPost__input} ref={newPostElement} onChange={onPostChange}  value={props.newPostText} />
                </div>
                <div className={s.myPost__containerButton}>
                    <button className={s.myPost__button} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts

