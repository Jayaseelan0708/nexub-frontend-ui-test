import React, { Fragment, memo, useContext, useState, useEffect } from "react";
import { IcnFile } from "../../Assets/Icons";
import { AppContext } from "../../Context/AppContext";
import TaskList from "./TaskList";
import _ from "lodash";

const Task = () => {

    const { taskList } = useContext(AppContext);
    const [currentTask, setCurrentTask] = useState(null);
    const [completedTask, setCompletedTask] = useState(null);
    const [pendingTask, setPendingTask] = useState(null);

    const getFilterData = (list, filterType) => {
        let data = [];
        try {
            data = list.filter(filter => filter.type === filterType);
        } catch (err) {
            console.log("Task get data failed-", err);
        }
        return data;
    }

    useEffect(() => {
        let currentData = getFilterData(taskList, "current");
        setCurrentTask(currentData);

        let completedData = getFilterData(taskList, "completed");
        setCompletedTask(completedData);

        let pendingData = getFilterData(taskList, "pending");
        setPendingTask(pendingData);

    }, [taskList])

    return (<Fragment>
        <div className="gx-3 d-md-flex gap-4 mt-5 pb-5">
            <div className="rounded gap-1 d-flex flex-column shadow-sm pb-3 mb-4">
                <TaskList list={currentTask} label="Current & Upcoming" />
            </div>

            <div className="rounded gap-1 d-flex flex-column shadow-sm pb-3 mb-4">
                <TaskList list={completedTask} label="Completed" />
            </div>

            <div className="rounded gap-1 d-flex flex-column shadow-sm pb-3 mb-4">
                <TaskList list={pendingTask} label="Failed" />
            </div>


        </div>
    </Fragment>)
}

export default memo(Task);