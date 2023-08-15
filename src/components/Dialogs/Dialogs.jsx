import React from "react";
import s from "./Dialog.module.css"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Dimych</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Pasha</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Lena</div>
                <div className={s.dialog}>Liza</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-camasutra?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    )
}

export default Dialogs