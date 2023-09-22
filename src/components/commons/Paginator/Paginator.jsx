import React from "react";
import styles from "./paginator.module.css";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div className={styles.numberOfPage}>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? styles.selectedPage : ""} onClick={(e) => {
                        props.onPageChange(p)
                    }}>{p}</span>
                })}
            </div>
    )
}

export default Paginator