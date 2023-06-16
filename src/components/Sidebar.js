import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
const Sidebar = () => {
  /*return (
    

    
     <div className='side'>
     <p></p>
     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Dropdown
          </a>
     <ul className="dropdown-menu">
            <li><Link to="/" className="dropdown-item">Home</Link></li>
            <li><Link to="/login" className="dropdown-item">Login</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <a className="dropdown-item" href="#">Something else here</a>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
     
     
     
     
     
     </div>
     
  ); */

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <span className="navbar-toggler-icon"></span>
      </Button>

      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to="/" className="dropdown-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/login" className="dropdown-item">
                Login
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <Link to="/about" className="dropdown-item">
                About Us
              </Link>
            <li>
              <Link to="funzone" className="dropdown-item">FunZone</Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
