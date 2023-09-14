import React from "react";
import s from './ProfileInfo.module.css'
// import mainImg from "./../../../images/image-main.jpg";
import Preloader from "../../commons/preloader/Preloader";
import ProfileStatus from"./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {

        return <Preloader isFetching={true}/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.image} src={mainImg} alt='main-im'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="user"/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo