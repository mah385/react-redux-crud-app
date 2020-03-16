import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light border border-bottom">
        <Link to="/" className="navbar-brand">
          React Redux CRUD
        </Link>
      </nav>
    );
  }
}

export default NavBar;
