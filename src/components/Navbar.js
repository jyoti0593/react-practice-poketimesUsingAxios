import React from "react";
import {Link, NavLink} from 'react-router-dom'

class Navbar extends React.Component {
  render() {

    return (
      <nav className="nav-wrapper red darken-6">
        <div className="container">
          <a className="brand-logo">Poke'Times</a>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
