import React from "react";
import classNames from "classnames";
import styles from "./NavLinks.module.css";

function NavLink({ navLink, navLinkIndex, changeActiveLink }) {
  const linkClassName = classNames(styles.navLink, {
    [styles.activeNavLink]: navLink.isActive,
  });

  const onLinkClickHandler = () => {
    changeActiveLink(navLinkIndex);
  };

  return (
    <li>
      <a
        className={linkClassName}
        onClick={onLinkClickHandler}
        href={navLink.link}
      >
        <img
          className={styles.navImg}
          src={navLink.icon}
          alt={navLink.menuItem}
        />
        {navLink.menuItem}
      </a>
    </li>
  );
}

export default NavLink;
