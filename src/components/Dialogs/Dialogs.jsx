import React from "react";
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}


const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Kristina"},
        {id: 3, name: "Janet"},
        {id: 4, name: "Elena"},
        {id: 5, name: "Svetlana"},
        {id: 6, name: "Andrey"},
    ]

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "HOw is your it-camasutra?"},
        {id: 3, message: "Hello from React-app"},
        {id: 4, message: "Do you Know React?"},
        {id: 5, message: "No"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name="Dimych" id="1"/>

                <DialogItem name="Kristina" id="2"/>

                <DialogItem name="Gosha" id="3"/>

                <DialogItem name="Violeta" id="4"/>

                <DialogItem name="Elena" id="5"/>

                <DialogItem name="Janet" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How is your it-camautra?"/>
                <Message message="This is thery good!"/>

            </div>
        </div>
    )
}

export default Dialogs