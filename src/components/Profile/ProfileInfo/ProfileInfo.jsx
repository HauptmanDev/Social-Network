import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={s.picture}>*/}
            {/*<img*/}
            {/*src='http://www.gumus-group.com/Assets/uploads/1700x300-glass-building.jpg?t=Fri%20Aug%2010%202018%2013:45:24%20GMT+0300%20(GMT+03:00)'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>)
};
export default ProfileInfo;