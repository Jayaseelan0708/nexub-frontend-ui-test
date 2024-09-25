import React, { Fragment, memo } from "react";
import { Dropdown } from "react-bootstrap";
import { IcnMessage, ICN_GROUP_MENU, ICN_BELL } from "../../Assets/Icons";
import AvatarImg from "../../Assets/Images/avatar.png";

const RightMenus = () => {

    return (<Fragment>
        <div
            className="d-flex justify-content-center shadow-sm bg-white  rounded-circle align-items-center m-2 px-2 pt-1 d-none d-sm-block"
            style={{ width: "38px", height: "38px" }}
        >
            {<IcnMessage />}
        </div>
        <div
            className="d-flex justify-content-center shadow-sm bg-white  rounded-circle m-2 px-2 align-items-center pt-1 d-none d-sm-block"
            style={{ width: "38px", height: "38px" }}
        >
            {ICN_GROUP_MENU}
        </div>
        <div
            className="d-flex justify-content-center shadow-sm bg-white  rounded-circle m-2 px-2 align-items-center pt-1 d-none d-sm-block"
            style={{ width: "38px", height: "38px" }}
        >
            {ICN_BELL}
        </div>

        <div className="d-flex justify-content-center shadow-sm bg-white  rounded-circle m-2 p-1 align-items-center">
            <Dropdown>
                <Dropdown.Toggle className="userProfile-menu profile-icon">
                    <img
                        src={AvatarImg}
                        className="rounded-circle"
                        style={{ width: "38px", height: "38px" }}
                        alt="..."
                    />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-align" align={"end"} flip={true}>
                    <div className="dropdown-content">
                        <Dropdown.Item className="dropdown-items-name">
                            Hi Jayaseelan!
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-items-profile">
                            <span className="pdl-5">My Profile</span>
                        </Dropdown.Item>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </Fragment>)
}
export default memo(RightMenus);