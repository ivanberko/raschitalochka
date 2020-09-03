import React from "react";
import { button } from "./Button.module.css";

const Button = ({ label }) => (
  <button type="button" className={button}>
    {label}
  </button>
);

export default Button;
