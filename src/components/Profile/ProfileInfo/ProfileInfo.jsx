import React from "react";
import s from './ProfileInfo.module.css'
// import mainImg from "./../../../images/image-main.jpg";
import Preloader from "../../commons/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader isFetching={true}/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt="user"/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo