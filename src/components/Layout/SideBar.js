import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Menu>
      <Link className="menu-item" to="/dashboard">
        Home
      </Link>
      <Link className="menu-item" to="/organization">
        Organization
      </Link>
      <Link className="menu-item" to="/project">
        Projects
      </Link>
      <Link className="menu-item" to="/schedule">
        Schedule
      </Link>
    </Menu>
  );
};
