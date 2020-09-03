import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import MainTableMobile from "../../components/MainTable/Mobile/MainTableMobile";
import MainTableDesckop from "../../components/MainTable/TabletOrDesktop/MainTableDesckop";
import Button from "../../components/Button/Button";
import Chart from "../../components/Chart/Chart";

const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      <Chart />
      {/* {isMobileDevice ? (
        <MainTableMobile>
          <Button label={"Add Income"} />
          <Button label={"Add Cost"} />
        </MainTableMobile>
      ) : (
        <MainTableDesckop>
          <Button label={"Add Income"} />
          <Button label={"Add Cost"} />
        </MainTableDesckop>
      )} */}
    </>
  );
};

export default Home;
