import React, { Fragment, memo } from "react";
import EmployeeImg from '../../Assets/Images/employee.png';

const ProfileDetails = ({ }) => {

    return (<Fragment>
        <div className="d-flex gx-5 align-items-center px-3 pb-3 gap-5">
            <div className="fs-4 fw-medium">Employee Details</div>
        </div>
        <div className="gx-3 d-md-flex align-items-center gap-4">
            <div className="">
                <img src={EmployeeImg} className="rounded" alt="..." />
            </div>
            <div className="d-flex gap-2 flex-column">
                <div className="">
                    <span className="badge text-bg-primary px-3 rounded-pill">Member</span>
                </div>
                <div className="fs-5 fw-medium">
                    Welcome, Alexa
                </div>
                <div className="small text-body-secondary">
                    Manage your info, privacy, and security to make Frontend work better for you. <span className="text-primary"> Learn more</span>
                </div>

            </div>
        </div>
    </Fragment>)
}

export default memo(ProfileDetails);