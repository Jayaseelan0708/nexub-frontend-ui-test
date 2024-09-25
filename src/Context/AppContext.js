import React, { createContext, useState, useEffect } from 'react';
import ProjectMemberData from '../Data/ProjectMemberData';
import TaskData from '../Data/TaskData';


export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export const AppContextProvider = ({ children }) => {
    const [projectMembers, setProjectMembers] = useState(null);
    const [taskList, setTaskList] = useState(null);

    useEffect(() => {
        setProjectMembers(ProjectMemberData);
        setTaskList(TaskData.task);
    }, []);

    return (<AppContext.Provider value={{
        projectMembers,
        setProjectMembers,
        taskList, 
        setTaskList
    }}>
        {children}
    </AppContext.Provider>)
}