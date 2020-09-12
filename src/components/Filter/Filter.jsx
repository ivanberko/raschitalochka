import React from "react";
import Select from "react-select";

import Graph from "../Graph/Graph";
import styles from "./Filter.module.css";

const Filter = ({ financeData }) => {
  const optionsMonth = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];

  const optionsYear = financeData
    .map((el) => new Date(el.date).getFullYear())
    .filter((el, index, arr) => arr.indexOf(el) === index)
    .map((el) => ({ value: el, label: el }));

  const uniqueMonthIndex = financeData
    .map((el) => new Date(el.date).getMonth())
    .filter((el, index, arr) => arr.indexOf(el) === index);

  return (
    <>
      <div className={styles.graphHolder}>
        <div className={styles.graphHolderHeading}>
          <h2 className={styles.heading}>Cost Diagram</h2>
        </div>
        <Graph />
        <div className={styles.wrap}>
          <Select
            options={optionsMonth}
            defaultInputValue="Month"
            className={styles.select}
            isOptionDisabled={(options) =>
              !uniqueMonthIndex.some((el) => options.value === el)
            }
          />
          <Select
            options={optionsYear}
            defaultInputValue="Year"
            className={styles.select}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
