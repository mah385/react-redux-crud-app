import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import * as URLPathConstant from "../../URLPathConstant";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light border border-bottom">
        <Link to={URLPathConstant.WELCOME_URL_PATH} className="navbar-brand">
          React Redux CRUD
        </Link>
        <div>
          <NavLink
            to={URLPathConstant.HOME_URL_PATH}
            className="btn btn-sm btn-outline-success"
          >
            Home
          </NavLink>
          <NavLink
            to={URLPathConstant.ADD_NEW_MOBILE_URL_PATH}
            className="btn btn-sm btn-outline-success mx-2"
          >
            Add New Mobile
          </NavLink>
          <NavLink
            to={URLPathConstant.SHOW_ALL_MOBILES_URL_PATH}
            className="btn btn-sm btn-outline-success"
          >
            Show All Mobiles
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
