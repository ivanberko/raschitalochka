import React from "react";

import { useMedia } from "../../helpers/mediaQuery";
import { formatNumbers } from "../../helpers/format";

import styles from "./TotalBalance.module.css";

const TotalBalance = ({ totalBalance }) => {
  const [isDesktop, isMobile, isTablet, isTabletOrDesktop]= useMedia();

  return (
    <div className={styles.wrapBlance}>
      {isDesktop && (
        <>
          <p className={styles.textBalabce}>Total Balance, UAH</p>
          <p className={styles.balance}>{formatNumbers(totalBalance)}</p>
        </>
      )}
      {isTablet && (
        <>
          <p className={styles.textBalabce}>Total Balance: </p>
          &nbsp;
          <p className={styles.balance}>{formatNumbers(totalBalance)} UAH</p>
        </>
      )}
      {isMobile && (
        <>
          <p className={styles.textBalabce}>Total Balance, UAH</p>
          <p className={styles.balance}>{formatNumbers(totalBalance)}</p>
        </>
      )}
    </div>
  );
};

export default TotalBalance;
