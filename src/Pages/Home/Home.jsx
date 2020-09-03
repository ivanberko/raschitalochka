import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import MainTableMobile from "../../components/MainTable/Mobile/MainTableMobile";
import MainTableDesckop from "../../components/MainTable/TabletOrDesktop/MainTableDesckop";
import Button from "../../components/Button/Button";

const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  return (
    <>
      {isMobileDevice ? (
        <MainTableMobile>
          <Button label={"Add Income"} />
          <Button label={"Add Cost"} />
        </MainTableMobile>
      ) : (
        <MainTableDesckop>
          <Button label={"Add Income"} />
          <Button label={"Add Cost"} />
        </MainTableDesckop>
      )}
    </>
  );
};

export default Home;