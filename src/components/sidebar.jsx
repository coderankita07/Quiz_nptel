/** External */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import classNames from "classnames";

/** Utils */
import navItems from "../../db/db";

/** Styles */
import classes from "../../styles/sidebar.module.css";

const Sidebar = ({ showToggleNavbarForSmallScreens = true }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleButtonClasses = classNames(classes.toggleNavbarButton, {
    [classes.centerIcon]: showNavbar,
  });

  const handleSidebarToggle = () => {
    setShowNavbar(!showNavbar);

    if (showNavbar) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
  };

  const toggleSidebarButtonComp = (
    <div className={toggleButtonClasses} onClick={handleSidebarToggle}>
      <IoIosArrowForward />
    </div>
  );

  const containerClasses = classNames(classes.container, {
    [classes.showNavbar]: showNavbar,
  });

  return (
    <div className={containerClasses}>
      <h2>Explore</h2>
      <ul className={classes.weeksContainer}>
        {navItems.map((item, i) => {
          let link = i === 0 ? "/about" : `/week/${i}`;
          return (
            <div className={classes.week} key={i}>
              <li key={i}>
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : null
                  }
                >
                  {item}
                </NavLink>
              </li>
            </div>
          );
        })}
      </ul>
      {showToggleNavbarForSmallScreens ? toggleSidebarButtonComp : null}
    </div>
  );
};

export default Sidebar;
