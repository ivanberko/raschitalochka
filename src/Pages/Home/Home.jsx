import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import MainTableMobile from "../../components/MainTable/Mobile/MainTableMobile";
import MainTableDesckop from "../../components/MainTable/TabletOrDesktop/MainTableDesckop";
import Button from "../../components/Button/Button";

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
          <Button label={"Add Income"} />
          <Button label={"Add Cost"} />
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
