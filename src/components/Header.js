import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
    

    
  return (
    <div className="header">
      <div className="item">
        <Link to="/">Home</Link>
      </div>
      <div className="item">
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
  
};

export default Header;
