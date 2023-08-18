import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



    let dialogsElements = props.state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.imgSrc}/>)

    let messageElements = props.state.messagesData.map(a => <Message message={a.message}/>)

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