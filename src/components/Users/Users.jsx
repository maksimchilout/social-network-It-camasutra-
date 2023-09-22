import React from "react";
import Paginator from "../commons/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, pageSize, onPageChange, totalUsersCount, users, ...props}) => {
    return (
        <div>
            <Paginator
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
                totalUsersCount={totalUsersCount}
            />
            <div>
                {
                    users.map(u => {
                        return (
                            <User user={u}
                                  key={u.id}
                                  followingInProgress={props.followingInProgress}
                                  follow={props.follow}
                                  unfollow={props.unfollow}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Users