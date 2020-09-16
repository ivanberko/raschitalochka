import React, { useState } from "react";

import { useMedia } from "../../helpers/mediaQuery";

import { scrollToUp } from "../../helpers/format";

// Components
import MainTableMobile from "../../containers/MainTableMobileContainer";
import MainTableDesktop from "../../containers/MainTableDesktopContainer";

import { button } from "./Button.module.css";

import ModalWindow from "../../components/ModalWindow/ModalWindow";
import CostIncome from "./../../Pages/CostIncome/CostIncome";

const Main = () => {
  const [isDesktop, isMobile, isTablet, isTabletOrDesktop]= useMedia();


  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("COST");

  const changeIsModalOpen = (e) => {
    if (!isModalOpen) {
      setActionType(e.target.name);
    }
    setIsModalOpen(!isModalOpen);
  };

  const changeIsFormOpen = (e) => {
    scrollToUp();
    if (!isFormOpen) {
      setActionType(e.target.name);
    }
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      {isMobile ? (
        <MainTableMobile>
          <button className={button} onClick={changeIsFormOpen} name="INCOME">
            Add Income
          </button>
          <button className={button} onClick={changeIsFormOpen} name="COST">
            Add Cost
          </button>
        </MainTableMobile>
      ) : (
        <MainTableDesktop>
          <button className={button} onClick={changeIsModalOpen} name="INCOME">
            Add Income
          </button>
          <button className={button} onClick={changeIsModalOpen} name="COST">
            Add Cost
          </button>
        </MainTableDesktop>
      )}
      {isFormOpen && (
        <CostIncome
          actionType={actionType}
          changeIsFormOpen={changeIsFormOpen}
        />
      )}
      {isModalOpen && (
        <ModalWindow
          changeIsModalOpen={changeIsModalOpen}
          actionType={actionType}
        />
      )}
    </>
  );
};

export default Main;
