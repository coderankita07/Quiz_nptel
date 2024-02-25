/** External */
import React from "react";
import { NavLink } from "react-router-dom";

/** Styles */
import classes from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.brand}>
        <h1>
          <NavLink to="/">Nptel Revision Portal</NavLink>
        </h1>
      </div>
      <ul className={classes.navLinkContainer}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a
            href="https://onlinecourses.nptel.ac.in/noc22_cs61/course"
            target="_blank"
          >
            Go to course
          </a>
        </li>
        <li>
          <a href="https://github.com/saurabhraj123" target="_blank">
            Git Hub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
