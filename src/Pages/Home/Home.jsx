import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import MainTableMobile from "../../components/MainTable/Mobile/MainTableMobile";
import MainTableDesckop from "../../components/MainTable/TabletOrDesktop/MainTableDesckop";
import ModalWindow from "../../components/ModalWindow";
import LayoutDiagram from "../../components/LayoutDiagram/LayoutDiagram";

import { button } from "./Button.module.css";

const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 767px)",
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
      <LayoutDiagram />
      {isMobileDevice ? (
        <MainTableMobile>
          {/* <NavLink path="/income" /> <CostIncome actionType="INCOME" />
          <NavLink path="/cost" /> <CostIncome actionType="COST" /> */}
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
