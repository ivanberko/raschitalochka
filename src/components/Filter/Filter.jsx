import React from "react";
import Select, { createFilter } from "react-select";

import styles from "./Filter.module.css";

const data = {
  success: true,
  message: "Data found with this ID",
  finance: {
    _id: "5c9396e2bc4e0d8ec4c45f64",
    data: [
      {
        comments: "cool",
        _id: "5c93a50a9fd94d958fb18df1",
        dateEvent: "1994824666",
        typeEvent: "+",
        category: "Other",
        amountEvent: 205,
        balanceAfter: 1293523,
        'typeTotalBalance:"+"': null,
      },
      {
        comments: "cool",
        _id: "5c93a50a9fd94d958fb18df1",
        dateEvent: "1304824666",
        typeEvent: "+",
        category: "Other",
        amountEvent: 205,
        balanceAfter: 1293523,
        'typeTotalBalance:"+"': null,
      },
      {
        comments: "cool",
        _id: "5c93a50a9fd94d958fb18df1",
        dateEvent: "1094824666",
        typeEvent: "+",
        category: "Other",
        amountEvent: 205,
        balanceAfter: 1293523,
        'typeTotalBalance:"+"': null,
      },
    ],
    userId: "5c9396e2bc4e0d8ec4c45f63",
    totalBalance: 123,
    'typeTotalBalance:"+"': null,
  },
};

const Filter = ({ onSelectMonth }) => {
  const optionsMonth = [
    { value: "0", label: "January" },
    { value: "1", label: "February" },
    { value: "2", label: "March" },
    { value: "3", label: "April" },
    { value: "4", label: "May" },
    { value: "5", label: "June" },
    { value: "6", label: "July" },
    { value: "7", label: "August" },
    { value: "8", label: "September" },
    { value: "9", label: "October" },
    { value: "10", label: "November" },
    { value: "11", label: "December" },
  ];

  return (
    <div className={styles.wrap}>
      <Select
        options={optionsMonth}
        defaultInputValue="Month"
        className={styles.select}
        onChange={onSelectMonth}
        filterOption={createFilter()}
      />
    </div>
  );
};

export default Filter;
