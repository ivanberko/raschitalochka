import React, { useState, useEffect } from "react";

import * as functions from "./functions";

import Graph from "../Graph/Graph";
import styles from "./Filter.module.css";

const Filter = ({ financeData }) => {
  const [month, setMonth] = useState(functions.months[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  const [filteredData, setFilteredData] = useState([]);
  const [allCategories, setAllCategories] = useState({});

  useEffect(() => {
    setFilteredData(
      functions.getFilteredDataByYearAndMonth(financeData, year, month)
    );
  }, [month, year]);

  useEffect(() => {
    setAllCategories(
      functions.getAllCategoryAmount(functions.getType(filteredData, "-"))
    );
  }, [filteredData]);

  const handleChangeYear = ({ target: { value } }) => {
    setYear(value);
  };

  const handleChangeMonth = ({ target: { value } }) => {
    setMonth(value);
  };

  const totalCostIncome = (type) => {
    return functions.getAllTypeAmount(functions.getType(filteredData, type));
  }

  return (
    <>
      <div className={styles.graphHolder}>
        <div className={styles.graphHolderHeading}>
          <h2 className={styles.heading}>Cost Diagram</h2>
        </div>
        <div>
          {filteredData.length > 0 ? (
            <Graph filteredData={allCategories} />
          ) : (
            <h2 className={styles.notifyMessage}>You have no transactions</h2>
          )}
          <div className={styles.wrap}>
            <select
              className={styles.select}
              value={month}
              onChange={handleChangeMonth}
            >
              {functions.getMonths(financeData).map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className={styles.select}
              value={year}
              onChange={handleChangeYear}
            >
              {functions.getYears(financeData).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/*{ filteredData.length>0 ?  <Table filteredData={allCategories} totalCost={totalCostIncome('-')} totalIncome={totalCostIncome('+')} /> : <h2 className={styles.notifyMessage}>You have no transactions</h2>} */}
        </div>
      </div>
    </>
  );
};

export default Filter;
