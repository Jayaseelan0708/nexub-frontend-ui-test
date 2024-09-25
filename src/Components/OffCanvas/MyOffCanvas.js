import React, { Fragment, useState, memo } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SidebarView from '../Sidebar';

function MyOffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<Fragment>
    <IconButton className=' d-md-none' color="primary" aria-label="home button" onClick={handleShow}>
      <MenuIcon />
    </IconButton>

    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>

          <div className="d-flex flex-column ">
            <div className="fs-4 fw-medium">UI Frontend</div>
            <sub className="fs-6 d-flex justify-content-end">Test</sub>
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <SidebarView />
    </Offcanvas>
  </Fragment>
  );
}

export default memo(MyOffCanvas);
