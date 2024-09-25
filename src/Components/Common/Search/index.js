import React, { Fragment, memo} from "react";
import { InputGroup, Form } from "react-bootstrap";
import { IcnSearch } from "../../../Assets/Icons";

const SearchInput = ({ placeholder = "" }) => {


    return (<Fragment>
        <InputGroup className="border-f0  rounded-pill bg-white">
            <InputGroup.Text className="rounded-start-pill bg-white border-0" id="basic-addon1">{<IcnSearch {...{ width: 24, height: 24 }} />}</InputGroup.Text>
            <Form.Control
                className="border-0 rounded-end-circle search-input shadow-none"
                placeholder={placeholder}
                aria-label="search"
                aria-describedby="basic-addon1"
            />
        </InputGroup>
    </Fragment>
    );
}
export default memo(SearchInput);