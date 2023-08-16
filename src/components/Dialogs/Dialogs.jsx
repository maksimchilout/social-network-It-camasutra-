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

    let dialogsElements = dialogsData.map(a => <DialogItem name={a.name} id={a.id}/>)

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "HOw is your it-camasutra?"},
        {id: 3, message: "Hello from React-app"},
        {id: 4, message: "Do you Know React?"},
        {id: 5, message: "No"},
    ]

    let messageElements = messagesData.map(a => <Message message={a.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs