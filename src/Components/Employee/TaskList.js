import React, { Fragment, memo } from 'react';
import { IcnFile } from "../../Assets/Icons";
import classNames from 'classnames';
import _ from "lodash";

const TaskList = ({ list = [], label = "" }) => {

    return (<Fragment>
        <div className="d-flex align-items-center py-3 bg-body-secondary rounded-top px-3 fw-medium mb-3 small">
            {label}
        </div>
        {
            !_.isEmpty(list) && list.map((list, index) => {
                return <div className="px-3">
                    <div key={`${list?.id}-${index}`} className="border rounded p-3">
                        <div className={classNames("fw-semibold mb-2",{"text-decoration-line-through text-warning": list?.type === "completed"})}>{list?.name}</div>
                        <div className="d-flex align-items-center gap-2">
                            <div className=""><span className="px-1"><IcnFile /></span> <span className="px1 small fw-medium">{list?.label}</span></div>
                            <div className={classNames("px-3 badge p-2 rounded bg-body-secondary text-danger",{"bg-warning-subtle": list?.status === "Low"})}>{list?.status}</div>
                        </div>
                    </div>

                </div>

            })
        }
    </Fragment>)
}

export default memo(TaskList);