import React from "react";
import s from './ProfileInfo.module.css'
// import mainImg from "./../../../images/images-main.jpg";
import Preloader from "../../commons/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../images/minion.jpg"
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader isFetching={true}/>
    }

    const onMainPhotoSelected = (e) => {

       if (e.target.files.length) {
           savePhoto(e.target.files[0])
       }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt="user"/>
                { isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo