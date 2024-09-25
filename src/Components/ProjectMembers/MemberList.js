import React, { Fragment, memo, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import ProjectMemberData from '../../Data/ProjectMemberData';
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import SearchInput from "../Common/Search";
import MemberElements from "./MemberElements";
import PaginationPanel from "./PaginationPanel";

const MemberList = () => {

    const { projectMembers } = useContext(AppContext);

    return (<Fragment>
        <div className="d-sm-flex gx-5 align-items-center px-3 pb-3 gap-5">
            <div className="fs-4 fw-medium ">Project Members</div>
            <div className="d-flex align-items-center">
                <SearchInput placeholder="search 08 employees" />
            </div>
        </div>
        <div className="member-card gx-5 d-flex align-items-center justify-content-center flex-wrap gap-5">
            {
                !_.isEmpty(projectMembers?.memberList) && <MemberElements members={projectMembers?.memberList} />
            }
        </div>
        {
            !_.isEmpty(projectMembers?.memberList) && <PaginationPanel />
        }

    </Fragment>)
}

export default memo(MemberList);