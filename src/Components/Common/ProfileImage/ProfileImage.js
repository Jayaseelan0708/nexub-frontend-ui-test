import React, { Fragment, memo } from "react";

const ProfileImage = ({source=''}) => {

    return (<Fragment>
        <img src={source} className="rounded-circle profile-img" alt="..." />
    </Fragment>)
}

export default memo(ProfileImage);