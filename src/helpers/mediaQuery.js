import { useMediaQuery } from "react-responsive";

export const useMedia = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-device-width: 768px) and (max-device-width: 1023px)",
  });

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const isTabletOrDesktop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  return [isDesktop, isMobile, isTablet, isTabletOrDesktop];
};
