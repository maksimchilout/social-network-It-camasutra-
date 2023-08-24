import React from "react";
import s from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} src={dialog.imgSrc}/>)

    let messageElements = state.messagesData.map(a => <Message message={a.message} key={a.id}/>)


    let newMessageBody = state.newMessageBody

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)


    }
    let onSendMessageClick = () => {
        props.sendMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your message'
                            value={newMessageBody}
                            onChange={onNewMessageChange}></textarea>

                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default Dialogs