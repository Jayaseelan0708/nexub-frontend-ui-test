import React, { Fragment, memo } from "react";
import AvatarImg from '../../Assets/Images/avatar.png';
import { IcnEdit, IcnStar } from "../../Assets/Icons";

const Ratings = ({ }) => {

    return (<Fragment>
        <div className="col-md-6 border border-info-subtle rounded p-3 gap-3 d-flex flex-column py-1 mb-4">
            <div className="d-flex justify-content-between px-3 ">
                <div className="small fw-medium">Ratings</div>
                <div className="rounded-circle bg-primary m-1 px-1"><IcnEdit /></div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-1">
                <div className="">
                    <img src={AvatarImg} className="rounded-circle profile-img" alt="..." />
                </div>
                <div className="">
                    <div className="fw-medium">
                        Batosh
                    </div>
                    <div className="small text-primary">
                        CEO
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center gap-2">
                <IcnStar />
                <IcnStar />
                <IcnStar />
                <IcnStar />
                <IcnStar />
            </div>
            <div className="small text-body-secondary px-3">
                Lorem ipsum dolor sit amet consectetur. Fringilla nunc etiam ornare massa. Volutpat commodo elementum ipsum lectus. Proin leo sit auctor semper.
            </div>
        </div>
    </Fragment>)
}

export default memo(Ratings);