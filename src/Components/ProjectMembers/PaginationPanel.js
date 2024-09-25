import React, { Fragment, memo } from 'react';
import PaginationOne from "../Common/Pagination";
import { Form } from "react-bootstrap";


const PaginationPanel = ({ }) => {

    return <Fragment>
        <div className="pagination-bar d-flex justify-content-center align-items-center gap-5 m-4 pt-3 flex-wrap py-4">
            <div className="d-flex gap-3">
                <div className="px5 small text-light-emphasis">
                    Item per page
                </div>
                <div className="px5 small text-light-emphasis">
                    <Form.Select aria-label="Default select example" size="sm">
                        <option>Select</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </Form.Select>
                </div>
            </div>
            <div className="small text-light-emphasis">
                <div className="">40  _ 50 of 50</div>
            </div>
            <div className="">
                <PaginationOne />
            </div>
        </div>
    </Fragment>
}
export default memo(PaginationPanel);