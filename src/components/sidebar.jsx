import React from "react";
import { NavLink } from "react-router-dom";
import navItems from "../../db/db";
import "../../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <header className="side-header">
        <h2>Explore</h2>
      </header>
      <ul className="side-nav-items">
        {navItems.map((item, i) => {
          let link = i === 0 ? '/about' : `/week/${i}`;
          return (
            <li key={i}>
              <NavLink to={link}>{item}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
