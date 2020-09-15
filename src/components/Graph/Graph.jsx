import React from "react";
import { VictoryPie } from "victory";
import { graphBox } from "./Graph.module.css";

const Graph = ({ filteredData }) => {
  const data = filteredData.map(({ category, categoryAmount }) => ({
    x: category,
    y: categoryAmount,
  }));

  const colorFromDate = filteredData.map(({ color }) => color);

  return (
    <div className={graphBox}>
      <svg viewBox="0 0 1400 1400">
        <VictoryPie
          standalone={false}
          width={1400}
          height={1400}
          data={data}
          labelRadius={250}
          labelPlacement={({ index }) => (index ? "parallel" : "vertical")}
          labelPosition={"centroid"}
          style={{
            labels: { fill: "white", fontSize: 40 },
            data: { stroke: "#fff", strokeWidth: 2 },
          }}
          colorScale={colorFromDate}
        />
      </svg>
    </div>
  );
};

export default Graph;
