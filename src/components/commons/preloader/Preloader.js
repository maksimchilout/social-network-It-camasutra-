import preloader from "../../../images/Spinner-1s-200px.svg";
import React from "react";
import style from './preloade.module.css'

let Preloader = (props) => {
    return(
        <div className={style.preloadContainer}>
            {props.isFetching ? <img src={preloader} alt='preloader'/> : null}
        </div>
    )
}

export default Preloader