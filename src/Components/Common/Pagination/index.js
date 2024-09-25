import React, { Fragment, memo } from "react";
import { Pagination } from "react-bootstrap";
import { IcnForwardFirst, IcnForwardLast, IcnFirst, IcnLast } from "../../../Assets/Icons";
import './index.css'

const PaginationOne = ({ }) => {

    return (<Fragment>
        <Pagination id="pagination" className="mb-0 border-white gap-3">
            <Pagination.First id="pagination" className="border-white"><IcnForwardFirst /> </Pagination.First>
            <Pagination.Prev id="pagination" className="border-white"><IcnFirst /> </Pagination.Prev>

            <Pagination.Next id="pagination" className="border-white"><IcnLast /> </Pagination.Next>
            <Pagination.Last id="pagination" className="border-white"><IcnForwardLast /> </Pagination.Last>
        </Pagination>
    </Fragment>)
}

export default memo(PaginationOne);