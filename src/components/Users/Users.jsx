import React from "react";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={styles.numberOfPage}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""} onClick={(e) => {
                        props.onPageChange(p)
                    }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <div className={styles.avaContainer}>
                                            <img className={styles.userPhoto}
                                                 src={u.photos.small != null ? u.photos.small : './image/minion.jpg'}
                                                 alt=""/>
                                        </div>

                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button className={styles.buttonUnfollow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "0bbfb1fc - e810 - 4829 - a703 - 9f286e16212f"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                })


                                        }}>Unfollow</button>
                                        : <button className={styles.buttonFollow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.toggleFollowingProgress(true, u.id)
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "0bbfb1fc - e810 - 4829 - a703 - 9f286e16212f"
                                                }
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id)
                                                })


                                        }}>Follow</button>}

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
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