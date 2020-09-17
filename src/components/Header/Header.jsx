import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import withAuth from "../../hoc/withAuth";

import { mobileMediaQuery } from "../../helpers/mediaQuery";

import { load } from "../../services/localStorage";
import logoIcon from "../../images/logo.png";
import exit from "../../images/exit.png";
import style from "./Header.module.css";

const Header = ({ logout, history, user }) => {
  const isMobile = useMediaQuery(mobileMediaQuery);

  const handleClickLogout = () => {
    logout(load("token"));
    history.push("/login");
  };

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <NavLink to="/home" className={style.headerLeftWrapper}>
          <img src={logoIcon} alt="logo" className={style.logo} />
          {isMobile ? null : <p>Raschitalochka</p>}
        </NavLink>

        <div className={style.headerRightWrapper}>
          <p className={style.userName}>{user.userName}</p>
          <div onClick={handleClickLogout} className={style.logoutStyle}>
            <img src={exit} alt="logo" />
            {isMobile ? null : <p>Logout</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Header);
