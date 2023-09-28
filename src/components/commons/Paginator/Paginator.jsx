import React, {useState} from "react";
import styles from "./paginator.module.css";

let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize +  1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
            <div className={styles.numberOfPage}>
                {portionNumber > 1 &&
                <button className={styles.pag} onClick={() => {setPortionNumber(portionNumber - 1)}}>&#171;</button>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span className={currentPage === p ? styles.selectedPage : ""} key={p} onClick={(e) => {onPageChange(p)
                    }}>{p}</span>
                })}
                    {portionCount > portionNumber &&
                        <button className={styles.pag} onClick={() => {setPortionNumber(portionNumber + 1)}}>&#187;</button>}
            </div>
    )
}

export default Paginator