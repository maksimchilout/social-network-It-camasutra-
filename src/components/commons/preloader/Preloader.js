import preloader from "../../../images/Spinner-1s-200px.svg";
import React from "react";


let Preloader = (props) => {
    return(
        <div>
            {props.isFetching ? <img src={preloader} alt='preloader'/> : null}
        </div>
    )
}

export default Preloader