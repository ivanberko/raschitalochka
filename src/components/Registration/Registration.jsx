import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Registration/registration.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../../images/registration/logo.jpg";

import { register } from "../../services/api";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      pass: "",
      confirmPass: "",
      email: "",
      userName: "",
    },
    validationSchema: Yup.object({
      pass: Yup.string()
        .min(8, "Must be from 8 to 16 characters")
        .required("Required"),
      confirmPass: Yup.string()
        .min(8, "Must be from 8 to 16 characters")
        .max(16, "Must be from 8 to 16 characters")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      userName: Yup.string()
        .min(4, "Must be from 6 to 12 characters")
        .max(12, "Must be from 6 to 12 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      if (
        formik.values.pass === formik.values.confirmPass &&
        formik.values.userName.length >= 4
      ) {
        register({
          name: values.userName,
          email: values.email,
          password: values.pass,
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
        console.log(JSON.stringify(values, null, 2));
      } else alert("Please confirm your password");
    },
  });

  return (
    <div className={styles.registration__wrap}>
      <img className={styles.logo} src={logo} alt="logo" />
      <h2 className={styles.registration__wrap_title}>Raschitalochka</h2>
      <form
        className={styles.registration__wrap_form}
        onSubmit={formik.handleSubmit}
      >
        <input
          className={
            formik.errors.email || formik.values.email === ""
              ? styles.email__input
              : `${styles.email__input} ${styles.active}`
          }
          placeholder="E-mail as Login"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? <div></div> : null}
        <input
          className={
            formik.values.pass.length >= 8 &&
            formik.values.pass === formik.values.confirmPass
              ? `${styles.pass__input} ${styles.active}`
              : styles.pass__input
          }
          placeholder="Password"
          id="pass"
          name="pass"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pass}
        />
        {formik.touched.pass && formik.errors.pass ? <div></div> : null}
        <input
          className={
            formik.values.pass.length >= 8 &&
            formik.values.pass === formik.values.confirmPass
              ? `${styles.pass__input} ${styles.active}`
              : styles.pass__input
          }
          placeholder="Password Confirmation"
          id="confirmPass"
          name="confirmPass"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPass}
        />

        {formik.values.email === "" && (
          <progress
            className={styles.progressbar}
            max="100"
            value="0"
          ></progress>
        )}
        {formik.values.email !== "" &&
          formik.values.confirmPass.length <= 7.99 && (
            <progress
              className={styles.progressbar}
              max="100"
              value="25"
            ></progress>
          )}
        {formik.values.email !== "" &&
          formik.values.pass.length >= 8 &&
          formik.values.confirmPass >= 8 &&
          formik.values.pass === formik.values.confirmPass &&
          formik.values.userName.length <= 3.99 && (
            <progress
              className={styles.progressbar}
              max="100"
              value="75"
            ></progress>
          )}
        {formik.values.email !== "" &&
          formik.values.pass.length >= 8 &&
          formik.values.confirmPass >= 8 &&
          formik.values.pass === formik.values.confirmPass &&
          formik.values.userName.length >= 4 && (
            <progress
              className={styles.progressbar}
              max="100"
              value="100"
            ></progress>
          )}
        <input
          className={
            formik.values.userName.length >= 4
              ? `${styles.name__input} ${styles.active}`
              : styles.name__input
          }
          placeholder="Your name"
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? <div></div> : null}
        {formik.touched.confirmPass && formik.errors.confirmPass ? (
          <div></div>
        ) : null}
        <button className={styles.registration__btn} type="submit">
          Register
        </button>
      </form>
      <NavLink to="/login" exact className={styles.login__link}>
        Login
      </NavLink>
    </div>
  );
};

export default Registration;
