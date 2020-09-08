import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from 'react-router-dom';
import logoIcon from "../../images/logo.png";
import exit from "../../images/exit.png";
import {
  header,
  headerLeftWrapper,
  headerRightWrapper,
  logo,
  logout,
  userName,
  wrapper,
} from "./Header.module.css";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={wrapper}>
      <div className={header}>
        <NavLink to='/home' className={headerLeftWrapper}>
          <img src={logoIcon} alt="logo" className={logo} />
          {isMobile ? null : <p>Raschitalochka</p>}
        </NavLink>

        <div className={headerRightWrapper}>
          <p className={userName}>Your Name</p>
          <NavLink to='/' className={logout}>
            <img src={exit} alt="logo" />
            {isMobile ? null : <p>Logout</p>}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
