import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// material-icon
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

// css
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-device-width: 768px) and (max-device-width: 1223px)",
  });

  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  return (
    <div>
      <div className={styles.navigation}>
        <div className={styles.wrap}>
          <NavLink
            exact
            to="/"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <HomeIcon style={{ fontSize: 16 }} />
            <p className={styles.text}>Home</p>
          </NavLink>

          <div className={styles.stick}></div>

          <NavLink
            to="/diagram"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <TimelineIcon style={{ fontSize: 18 }} />
            <p className={styles.text}>Diagram</p>
          </NavLink>

          <div className={styles.stick}></div>
        </div>
        {isTabletOrDesktop && (
          <>
            <div className={styles.wrapBlance}>
              {isDesktop && (
                <>
                  <p className={styles.textBalabce}>Total Balance, UAH</p>
                  <p className={styles.balance}>24 000.00</p>
                </>
              )}
              {isTablet && (
                <>
                  <p className={styles.textBalabce}>Total Balance: </p>
                  &nbsp;
                  <p className={styles.balance}>24 000.00 UAH</p>
                </>
              )}
            </div>
          </>
        )}

        {isMobile && (
          <NavLink
            to="/d"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            <AttachMoneyIcon style={{ fontSize: 24 }} />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
