import React from "react";
import { useMedia } from "../../helpers/mediaQuery";

import Navigation from "../Navigation/Navigation";
import Currency from "../Currency/Currency";

const Sidebar = () => {
  const [isDesktop, isMobile, isTablet, isTabletOrDesktop] = useMedia();

  return (
    <div>
      <Navigation />
      {isDesktop ? <Currency /> : null}
    </div>
  );
};

export default Sidebar;
