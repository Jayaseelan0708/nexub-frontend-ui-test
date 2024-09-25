import React, { Fragment, memo } from "react";
import EmployeeProfile from "./EmployeeProfile";
import Task from "./Task";

const EmployeeInformation = () =>{

    return(<Fragment>
            <div className="px-5">
                <EmployeeProfile />
            </div>
            <div className="px-5">
                <Task />
            </div>
    </Fragment>)
}

export default memo(EmployeeInformation);