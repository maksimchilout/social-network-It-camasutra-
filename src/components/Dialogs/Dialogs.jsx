import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" +props.id}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Dimych" id="1" />

                <DialogItem name="Kristina" id="2" />

                <DialogItem name="Gosha" id="3" />

                <DialogItem name="Violeta" id="4" />

                <DialogItem name="Elena" id="5" />

                <DialogItem name="Janet" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hello" />
                <Message message="How is your it-camautra?" />
                <Message message="This is thery good!" />

            </div>
        </div>
    )
}

export default Dialogs