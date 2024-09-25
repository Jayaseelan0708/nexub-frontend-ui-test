import React, { Fragment, memo } from "react";
import ProfileDetails from "./ProfileDetails";
import Ratings from "./Ratings";
import TaskChart from "./TaskChart";

const EmployeeProfile = () => {

    return (<Fragment>
        <div className="d-flex gap-5 flex-column">
            <ProfileDetails />

            <div className="gx-3 d-md-flex gap-4">
                <Ratings />
                <TaskChart />
            </div>
        </div>

    </Fragment>)
}

export default memo(EmployeeProfile);