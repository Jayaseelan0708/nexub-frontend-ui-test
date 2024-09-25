import React, { Fragment, useState, useEffect, memo } from "react";
import { useNavigate } from 'react-router-dom';
import _ from "lodash";
import classNames from 'classnames';
import './index.css';

const Breadcrumbs = ({ location = {} }) => {

    const [breadcrumb, setBreadcrumb] = useState();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [itemsPathName, setItemsPathName] = useState();


    // This method is navigate from breadcrumbs 
    const handleClick = (item = {}) => {
        try {
            if (item?.path) {
                navigate(item.path)
            }
        } catch (err) {
            console.error("Exception occurred in handleClick -- ", err)
        }
    }


    // This method set the Breadcrumb name from KbSid
    const setBreadcrumbNames = () => {
        try {
            if (location?.pathname.length === 0) {
                setBreadcrumb([]);
            } else {
                switch (location?.pathname) {
                    case `/members`:
                        setBreadcrumb([{
                            name: "Dashboard",
                            path: `/`
                        },
                        {
                            name: 'Project Members',
                            path: `/members`
                        }])

                        break;
                    case `/members/employee`:
                        setBreadcrumb([{
                            name: "Dashboard",
                            path: `/`
                        },
                        {
                            name: 'Project Members',
                            path: `/members`
                        },
                        {
                            name: 'Employee Details',
                            path: `/members`
                        }
                        ])

                        break;
                }
            }
        } catch (err) {
            console.error("Error occurred in Breadcrumb --", err);
        }
    }



    useEffect(() => {
        setItems(breadcrumb);
    }, [breadcrumb])


    useEffect(() => {
        setBreadcrumbNames();
    }, [location, itemsPathName])



    return <Fragment>
        <div className="breadcrumbs px-5 mx-2">
            {
                !_.isEmpty(breadcrumb) &&
                breadcrumb?.map((item, index) => {
                    return <div key={`bread-${index}`} className={classNames('bread-menu no-active pdr-5 pdl-5', { 'activeLink': (index !== breadcrumb.length - 1) })} onClick={() => handleClick(item)}>
                        {item?.name}
                        {index !== breadcrumb.length - 1 && <span>{" >"} </span>}
                    </div>
                })
            }
        </div>
    </Fragment>
}

export default memo(Breadcrumbs);