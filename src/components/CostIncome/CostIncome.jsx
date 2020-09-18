import React from "react";
import FormCostIncome from "../../containers/containerCostIncome";

import style from "./CostIncome.module.css";

const CostIncome = ({ actionType, changeIsFormOpen }) => {
  return (
    <div className={style.incomCostWrapper}>
      <div className={style.incomCostBlock}>
        <svg
          className={style.svgArrow}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={changeIsFormOpen}
          name='backArrow'
        >
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M22 12l-4-4v3H3v2h15v3l4-4z" />
        </svg>
        <h3 className={style.incomCostHeader}>{`ADD ${actionType}`}</h3>
      </div>
    <div className={style.incomCostContainer}>

      <FormCostIncome actionType={actionType} changeIsModalOpen={changeIsFormOpen} />
      </div>
    </div>
  );
};

export default CostIncome;
