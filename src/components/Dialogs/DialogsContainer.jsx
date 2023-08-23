import React from "react";
import {addSendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    let onSendMessageClick = () => {
        props.store.dispatch(addSendMessageCreator())
    }

    return (
        <Dialogs
            dialogsPage={state}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
        />
    )
}

export default DialogsContainer