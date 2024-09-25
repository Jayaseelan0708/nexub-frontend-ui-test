import React, { Fragment, memo } from "react";
import SearchInput from "../Common/Search";
import MyOffCanvas from "../OffCanvas/MyOffCanvas";
import RightMenus from "./RightMenus";

const Header = () => {
  return (
    <Fragment>

      <div className="d-flex gap-4">
        <div className="menu-btn">
          <MyOffCanvas />
        </div>
        <div className="d-flex flex-column ">
          <div className="fs-4 fw-medium">UI Frontend</div>
          <sub className="fs-6 d-flex justify-content-end">Test</sub>
        </div>

        <div className="d-flex justify-content-center py-2 d-none d-md-block">
          <SearchInput placeholder="Quick Search" />
        </div>
      </div>
      <div className="d-flex gap-2 mx-1">
        <RightMenus />
      </div>
    </Fragment>
  );
};

export default memo(Header);
