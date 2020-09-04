import React from "react";
import { useMediaQuery } from "react-responsive";

import Chart from "../Chart/Chart";

import { title, wrap, container } from "./LayoutDiagram.module.css";

const LayoutDiagram = () => {
  const isTabletDevice = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section className={wrap}>
      {isTabletDevice && <h2 className={title}>Cost Diagram</h2>}
      <div className={container}>
        <Chart />
        <h1>Filter Component</h1>
      </div>
    </section>
  );
};

export default LayoutDiagram;
