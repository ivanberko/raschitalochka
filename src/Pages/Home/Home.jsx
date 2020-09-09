import React from "react";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainInfo from "../../components/MainInfo/MainInfo";
import { mainWrapper } from "./Home.module.css";

const Home = (props) => {
  return (
    <>
      <Header {...props} />
      <div className={mainWrapper}>
        <Sidebar />
        <MainInfo />
      </div>
    </>
  );
};

export default Home;
