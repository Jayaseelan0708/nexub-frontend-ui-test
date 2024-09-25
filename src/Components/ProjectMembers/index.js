import React, { Fragment, memo } from "react";
import Layout from "../Layout";
import MemberList from "./MemberList";

import './index.css'

const ProjectMembers = () => {

    return (<Fragment>
        <Layout title="Project Members" description="This is the project members page">
            <div className="px-5">
                <MemberList />
            </div>
        </Layout>
    </Fragment>
    );
}

export default memo(ProjectMembers);