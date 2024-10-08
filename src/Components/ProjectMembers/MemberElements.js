import React, { Fragment, memo } from 'react';
import { useNavigate } from "react-router-dom";
import ProfileImage from '../Common/ProfileImage/ProfileImage';
import classNames from 'classnames';
import AvatarImg from "../../Assets/Images/avatar.png";


const MemberElements = ({ members }) => {
    const navigate = useNavigate();

    return <Fragment>
        {
            members.map((list, index) => {
                return (<div key={`members-${index}`} className={classNames("member-card-item d-flex align-items-center p-4 flex-column bg-info-subtle gap-2 rounded", { "bg-warning-subtle": !list?.isActive })}>
                    <div className="border border-primary rounded-circle position-relative m-1">
                        <ProfileImage source={AvatarImg} />
                        <span className={classNames("position-absolute bottom-0 end-0 border border-light rounded-circle bg-success p-1", { 'bg-warning': !list?.isActive })}></span>
                    </div>
                    <div className="fw-semibold">{list?.name}</div>
                    <div className={classNames("fw-bold text-primary fs-sm", { "text-warning": !list?.isActive })}>{list?.role}</div>
                    <div className="member-btn pt-3"> <div className="member-btn shadow-sm rounded py-1 px-5 border border-primary fs-sm fw-medium pointer" onClick={() => { navigate(list?.link) }}>Visit Profile</div></div>
                </div>)
            })
        }
    </Fragment>
}
export default memo(MemberElements);