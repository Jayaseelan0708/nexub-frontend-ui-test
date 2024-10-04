import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Breadcrumbs from '../Common/Breadcrumbs';
import SidebarView from '../Sidebar';
import SideMenuBar from '../Sidebar/SideMenuBar';

const Layout = ({ children }) => {

    const location = useLocation();

    return (<div className='app-container'>
        <div className='app-header d-flex justify-content-between align-items-center px-3 py-2'>
            <Header />
        </div>
        <div className='app-main'>
            <div className="d-flex">
                <div className="app-sidebar col-md-3  d-none d-md-block p-3">
                    {/* <SidebarView /> */}
                    <SideMenuBar />
                </div>
                <div className="col-md-9 border-start border-light-subtle">
                    {
                        location?.pathname !== "/" && <div className='pb-3 d-none d-sm-block'>
                            <Breadcrumbs {...{ location: location } || {}} />
                        </div>
                    }

                    <div className='pb-3'>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    </div>);
}
export default Layout;