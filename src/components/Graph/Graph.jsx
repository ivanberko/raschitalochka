import React from "react";
import { VictoryPie } from "victory";
import {
  button,
  graphBox,
  graphHolder,
  graphHolderHeading,
  heading,
} from "./Graph.module.css";

const data = [
  { x: "Main Expenses", y: 58 },
  { x: "Food", y: 32 },
  { x: "Car", y: 15 },
  { x: "Self Care", y: 25 },
  { x: "Child Care", y: 16 },
  { x: "House", y: 6 },
  { x: "Eduction", y: 18 },
  { x: "Entertainment", y: 24 },
  { x: "Other", y: 22 },
];

const Graph = () => {
  return (
    <div className={graphHolder}>
      <div className={graphHolderHeading}>
        <h2 className={heading}>Cost Diagram</h2>
      </div>
      <div className={graphBox}>
        <svg viewBox="0 0 1400 1400">
          <VictoryPie
            standalone={false}
            width={1400}
            height={1400}
            data={data}
            labelRadius={280}
            style={{
              labels: { fontSize: 38, fill: "white" },
              data: { stroke: "#fff", strokeWidth: 2 },
            }}
            colorScale={[
              "#ecb22a",
              "#e28b21",
              "#d25825",
              "#68b6cc",
              "#5693d6",
              "#73a7e0",
              "#9cc253",
              "#73ad58",
              "#4e7c3b",
            ]}
          />
        </svg>

        <button type="button" className={button}>
          Update Diagram
        </button>
      </div>
    </div>
  );
};

export default Graph;
