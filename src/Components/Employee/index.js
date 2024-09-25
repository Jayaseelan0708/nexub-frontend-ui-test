import React, { Fragment, memo } from "react";
import Layout from "../Layout";
import EmployeeInformation from "./EmployeeInfromation";


const Employee = () => {

    return (<Fragment>
        <Layout title="Employee Page" description="This is the employee page">
            <EmployeeInformation />
        </Layout>
    </Fragment>
    );
}

export default memo(Employee);