import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import MainTableMobile from "../../components/MainTable/Mobile/MainTableMobile";
import MainTableDesckop from "../../components/MainTable/TabletOrDesktop/MainTableDesckop";

import { button } from "./Button.module.css";

import ModalWindow from "../../components/ModalWindow";

const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 767px)",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState("COST");
  const changeIsModalOpen = (e) => {
    if (!isModalOpen) {
    setActionType(e.target.name);      
    }
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isMobileDevice ? (
        <MainTableMobile>
        {/* <NavLink path="/income" /> <CostIncome actionType="INCOME" />  к примеру*/}
        {/* <NavLink path="/cost" /> <CostIncome actionType="COST" /> */}
        </MainTableMobile>
      ) : (
        <MainTableDesckop>
          <button className={button} onClick={changeIsModalOpen} name="INCOME">
            Add Income
          </button>
          <button className={button} onClick={changeIsModalOpen} name="COST">
            Add Cost
          </button>
        </MainTableDesckop>
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

export default Home;
