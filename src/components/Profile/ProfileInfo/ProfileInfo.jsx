import React, {useState} from "react";
import s from './ProfileInfo.module.css'
// import mainImg from "./../../../images/images-main.jpg";
import Preloader from "../../commons/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../images/minion.jpg"
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
     let [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader isFetching={true}/>
    }

    const onMainPhotoSelected = (e) => {

        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit =  (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )

    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="user"/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                { editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={ () => {setEditMode(true)}}/>}


                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.profileInfo}>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                <b>Full name:</b> {profile.fullName}
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob && <div>
                <b>My professional skill:</b> {profile.lookingForAJobDescription
            }
            </div>}
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo