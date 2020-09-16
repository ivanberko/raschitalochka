import React from 'react';

import styles from './TotalAll.module.css';

const Total = () => {
    return (
    <>
    <div className={ styles.totalOne }>
    <p>Total Costs:</p>
    <p className={ styles.cost }>22 549.24</p>
    </div>
    <div className={ styles.totalTwo }>
    <p>Total Income:</p>
    <p className={ styles.income }>27 350.00</p>
    </div>
    </>
    );
  };

export default Total;