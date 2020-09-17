import React from "react";

import FormCostIncome from "../../containers/containerCostIncome";
import style from "./ModalWindow.module.css";

const ModalWindow = ({changeIsModalOpen,actionType}) => {

const handleClickModalClose = (e) => {
    if (e.currentTarget.className === e.target.className) {
        changeIsModalOpen();
    }
}

  return (
    <div className={style.overlay} onClick={handleClickModalClose}>
      <div className={style.modal}>
        <h3 className={style.modalHeader}>{`ADD ${actionType}`}</h3>
        <FormCostIncome actionType={actionType} changeIsModalOpen={changeIsModalOpen} />
      </div>
    </div>
  );
};

export default ModalWindow;
