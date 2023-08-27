import React from "react";
import styles from './users.module.css'
import axios from "axios";

class Users extends React.Component{

    constructor(props) {
        super(props)
        if (this.props.users.length === 0) {
            console.log(this.props.users.length)
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    // debugger
                    // console.log(response.data.items)
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                            <span>
                                <div>
                                    <img className={styles.userPhoto} src={ u.photos.small != null ? u.photos.small : './image/minion.jpg' } alt=""/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button>
                                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}

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
}
export default Users