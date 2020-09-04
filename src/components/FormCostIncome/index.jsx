import React, { useState } from "react";
import {
  button,
  textarea,
  formContainer,
  categoriesList,
  categoriesItem,
  amountInput,
  dateInput,
  inputContainer,
  commentsHeader,
  categoriesHeader,
} from "./FormCostIncome.module.css";

const categoriesCost = [
  "Main Expenses",
  "Food",
  "Car",
  "Entertaiment",
  "Self Care",
  "Child Care",
  "Household Products",
  "Education",
  "Other Expenses",
];

const categoriesIncom = ["Regular Income", "Irregular Income"];

const FormCostIncome = ({ actionType, changeIsModalOpen }) => {
  const categories =
    actionType === "COST" ? [...categoriesCost] : [...categoriesIncom];

  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`amount: ${amount}; date: ${date}; category: ${category}; comments: ${comments};`);
    changeIsModalOpen();
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "amount":
        setAmount(value);
        break;
      case "date":
        setDate(value);
        break;
      case "categories":
        setCategory(value);
        break;
      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
  };

  return (
    <form className={formContainer} onSubmit={handleSubmit}>
      <div className={inputContainer}>
        <input
          className={amountInput}
          name="amount"
          onChange={handleChange}
          placeholder="Amount.00"
          type="number"
          min="0"
        />
        <input
          className={dateInput}
          name="date"
          type="date"
          onChange={handleChange}
          placeholder="DD / MM /"
        />
      </div>
      <span className={categoriesHeader}>Categories</span>
      <ul className={categoriesList} role="group">
        {categories.map((category) => (
          <li key={category} className={categoriesItem}>
            <label>
              <input onChange={handleChange} name="categories" type="radio" value={category} />
              {category}
            </label>
          </li>
        ))}
      </ul>
      <span className={commentsHeader}>Comments</span>
      <textarea
        className={textarea}
        onChange={handleChange}
        name="comments"
        type="textarea"
        placeholder="Lorem ipsum tararam pararam!"
      />
      <button type="submit" className={button}>
        Add
      </button>
    </form>
  );
};

export default FormCostIncome;
