import React from "react";

import { toISODate, formatNumbers } from "../../../helpers/format";
import { getCategoryColor } from "../../../helpers/initialCategoryColors";

import style from "./MainTableMobile.module.css";

const MainTableMobile = ({ financeData, children }) => {
  return (
    <section className={style.wrap}>
      <ul className={style.list}>
        {financeData.map(
          ({ _id, date, type, category, comments, amount, balanceAfter }) => {
            const colorCategory = getCategoryColor(category);
            return (
              <li
                key={_id}
                className={style.list__item}
                style={{
                  borderColor: colorCategory?.color,
                }}
              >
                <div className={style.list__itemRow}>
                  <p>Date</p>
                  <p>{toISODate(date)}</p>
                </div>
                <div className={style.list__itemRow}>
                  <p>Type</p>
                  <p>{type}</p>
                </div>
                <div className={style.list__itemRow}>
                  <p>Category</p>
                  <p>{category}</p>
                </div>
                <div className={style.list__itemRow}>
                  <p>Comments</p>
                  <p>{comments}</p>
                </div>
                <div className={style.list__itemRow}>
                  <p>Amount, UAH</p>
                  <p style={{ color: type === "+" ? "#75c16e" : "#ff6c00" }}>
                    {formatNumbers(amount)}
                  </p>
                </div>
                <div className={style.list__itemRow}>
                  <p>Balance After</p>
                  <p>{formatNumbers(balanceAfter)}</p>
                </div>
              </li>
            );
          }
        )}
      </ul>
      {!financeData.length && (
        <h2 className={style.notifyMessage}>You have no transactions</h2>
      )}
      <div className={style.boxButtons}>{children}</div>
    </section>
  );
};

export default MainTableMobile;
