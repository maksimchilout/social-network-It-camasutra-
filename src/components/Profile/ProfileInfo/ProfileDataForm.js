import s from "./ProfileInfo.module.css";
import React from "react";
import {createField, Input, Textarea} from "../../commons/FormsControls/FormControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.profileInfo}>
            <div><button>save</button></div>
            {error && <div>

                {error}
            </div>
            }
            <div>
                <b>Full name:</b> {createField("Full name", "fullName", [], Input,)}
            </div>
            <div>adm
                <b>Looking for a job:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skill:</b>
                {createField("My professional skill", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm