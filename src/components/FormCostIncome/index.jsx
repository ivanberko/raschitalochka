import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import TextField from "@material-ui/core/TextField";

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

const FormCostIncome = ({ actionType }) => {
  const categories =
    actionType === "COST" ? [...categoriesCost] : [...categoriesIncom];
  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto",
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* style*/}
      <Formik
        initialValues={{
          amount: 0,
          date: undefined,
          categories: "",
          comments: "",
        }}
        onSubmit={(values) => {
          console.log("files submited", values);
        }}
      >
        {({ values }) => (
          <Form>
            <Field
              style={{ width: "126px", height: "31px", padding: 0 }}
              /* style*/
              id="amount"
              name="amount"
              placeholder="Amount.00"
              type="number"
              min="0"
              value={values.amount}
            />
            <Field name="date">
              {() => (
                <TextField
                  style={{ width: "126px", height: "31px", padding: 0 }}
                  /* style*/
                  type="date"
                  format="DD/MM/YYYY"
                  value={values.date}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            </Field>
            <div role="group">
              Categories
              {categories.map((category) => (
                <label key={category} style={{ display: "block" }}>
                  {/* style*/}
                  <Field name="categories" type="radio" value={category} />
                  {category}
                </label>
              ))}
            </div>
            <Field name="comments" value={values.comments}>
              {() => (
                <textarea
                  style={{
                    display: "block",
                    resize: "none",
                    width: "277px",
                    height: "50px",
                  }}
                  /* style*/
                  type="textarea"
                  placeholder="Lorem ipsum tararam pararam!"
                />
              )}
            </Field>
            <button type="submit" style={{ width: "281px", height: "39px" }}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

/*textarea {
      width: 90%;  Ширина поля в процентах 
    height: 200px;  Высота поля в пикселах 
    resize: none;  Запрещаем изменять размер 
   } */

export default FormCostIncome;

// .modal-size {
//   position: absolute;
//   left: 710px;
//   top: 183px;
//   width: 500px;
// }

// .mobile-modal(page) {
//   width: 320px;
// }

// .desc-tabl-mobile-size-input {
//   border-width: 2px;
//   border-color: rgb(185, 201, 212);
//   border-style: solid;
//   border-radius: 4px;
//   background-color: rgb(255, 255, 255);
//   width: 126px;
//   height: 31px;
// }

// .comments-box {
//   border-width: 2px;
//   border-color: rgb(185, 201, 212);
//   border-style: solid;
//   border-radius: 4px;
//   width: 277px;
//   height: 50px;
// }

// .add-button {
//   border-radius: 4px;
//   background-image: linear-gradient( 0deg, rgb(117,193,110) 0%, rgba(81,109,87,0.70196) 100%);
//   box-shadow: 0px 3px 3px 0px rgba(84, 123, 87, 0.25);
//   width: 281px;
//   height: 39px;
// }
