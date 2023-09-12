import preloader from "../../../images/Spinner-1s-200px.svg";
import React from "react";


let PreloaderI = (props) => {
    return(
        <div>
            {props.isFetching ? <img src={preloader} alt='preloader'/> : <img src={preloader} alt='preloader'/>}
        </div>
    )
}

export default PreloaderI