import React, { Fragment, memo } from "react";
import ChartImg from '../../Assets/Images/chart.png';

const TaskChart = ({ }) => {

    return (<Fragment>
        <div className="col-md-6 d-md-flex border border-info-subtle rounded shadow-sm mb-4">
            <div className="col-md-6 d-flex justify-content-center align-items-center py-3">
                <img src={ChartImg} className="rounded profile-img" alt="..." />
            </div>
            <div className="small py-5 col-md-6 d-flex flex-column gap-2 bg-warning-subtle px-2 rounded shadow-sm">
                <div className="fw-medium px-2">All task by complete status</div>
                <div className="fw-medium"><span className="px-2 text-primary">55%</span> <span className="px-2">Completed Task</span></div>
                <div className="fw-medium"><span className="px-2 text-warning">30%</span><span className="px-2">Incompleted Task</span></div>
                <div className="fw-medium"><span className="px-2 text-warning">15%</span><span className="px-2">Over due</span></div>

            </div>
        </div>
    </Fragment>)
}

export default memo(TaskChart);