import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { tabletMediaQuery } from "../../helpers/mediaQuery";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainInfo from "../../components/MainInfo/MainInfo";
import Currency from "../../components/Currency/Currency";
import { mainWrapper } from "./Home.module.css";
import withAuth from "../../hoc/withAuth";
import { load } from "../../services/localStorage";

const Home = (props) => {
  const isTablet = useMediaQuery(tabletMediaQuery);

  useEffect(() => {
    const data = load("session");
    if (data) {
      props.userSession(data);
    }
    props.getFinance();
  }, []);

  const isDiagramPage = props.location.pathname === "/home/diagram";

  return (
    <>
      <Header {...props} />
      <div className={mainWrapper}>
        <Sidebar />
        <MainInfo />
        {isTablet && !isDiagramPage ? <Currency /> : null}
      </div>
    </>
  );
};

export default withAuth(Home);
