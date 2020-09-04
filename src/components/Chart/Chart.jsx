import React from "react";

import { VictoryPie } from "victory";
import { button, wrapSVG, wrap } from "./Chart.module.css";

const data = [
  { x: "Main Expenses", y: 8700 },
  { x: "Food", y: 3800.74 },
  { x: "Car", y: 1500 },
  { x: "Self Care", y: 800 },
  { x: "Child Care", y: 2208.5 },
  { x: "Household Products", y: 300 },
  { x: "Education", y: 3400 },
  { x: "Entertainment", y: 1230 },
  { x: "Other Expenses", y: 610 },
];

const colorCategory = [
  "#ecb22a",
  "#e28b20",
  "#d25925",
  "#67b7d0",
  "#5593d7",
  "#ffab00",
  "#9cc254",
  "#73ad57",
  "#507c3a",
];

const Chart = () => {
  return (
    <section className={wrap}>
      <div className={wrapSVG}>
        <svg viewBox="35 35 330 330">
          <VictoryPie
            standalone={false}
            data={data}
            colorScale={colorCategory}
            labelRadius={50}
            labelPlacement={({ index }) => (index ? "parallel" : "vertical")}
            labelPosition={"centroid"}
            style={{
              labels: { fill: "white", fontSize: 10 },
              data: {
                stroke: "#fff",
                strokeWidth: 1,
              },
            }}
          />
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
          <circle
            cx="200"
            cy="200"
            r="152"
            fill="none"
            stroke="black"
            strokeWidth={1}
            filter="url(#blurMe)"
          />
        </svg>
      </div>
      <button type="button" className={button} name="update" onClick={() => {}}>
        Update Diagram
      </button>
    </section>
  );
};

export default Chart;
