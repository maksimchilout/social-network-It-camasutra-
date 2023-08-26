import React from "react";
import styles from './users.module.css'


let Users = (props) => {
 if (props.users.length === 0) {
     props.setUsers(
         [
             {
                 id: 1,
                 photoURL: "./image/racon.jpg",
                 followed: false,
                 fullName: 'Dmitry',
                 status: 'I am a boss',
                 location: {city: 'Minsk', country: 'Belarus'}
             },
             {
                 id: 2,
                 photoURL: "../image/girl.jpg",
                 followed: true,
                 fullName: 'Kristina',
                 status: 'I am a boss too',
                 location: {city: 'Moscow', country: 'Russia'}
             },
             {
                 id: 3,
                 photoURL: "./image/minion.jpg",
                 followed: false,
                 fullName: 'Andrew',
                 status: 'I am a row employee',
                 location: {city: 'Kiev', country: 'Ukraine'}
             }
         ]
     )
 }

    return (
        <div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img className={styles.userPhoto} src={u.photoURL} alt=""/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users