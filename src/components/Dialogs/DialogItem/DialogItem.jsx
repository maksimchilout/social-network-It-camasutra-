import React from "react";
import s from "./../Dialog.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink className={s.persDialog} to={"/dialogs/" + props.id}>
                <div className={s.avaFrame}>
                    <img className={s.imgAva} src={props.src} alt="ava" />
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem