import React from "react";
import { useMediaQuery } from "react-responsive";
import { desktopMediaQuery } from "../../helpers/mediaQuery";

import Navigation from "../Navigation/Navigation";
import Currency from "../Currency/Currency";

const Sidebar = () => {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <div>
      <Navigation />
      {isDesktop ? <Currency /> : null}
    </div>
  );
};

export default Sidebar;
