import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

import { loginValidationSchema } from '../../helpers/format';

import logo from "../../images/registration/logo.jpg";
import withAuth from "../../hoc/withAuth";
import phoneImg from '../../images/login/phone.png';

import styles from "../Login/login.module.css";


const Login = ( { login, history } ) => {
  const formik = useFormik( {
    initialValues: {
      confirmPass: "",
      email: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: ( values ) => {
      console.log(login);
      login( { email: values.email, password: values.confirmPass }, history );      
    },
  } );

  return (
    <div className={styles.main_wrap}>
      <div className={styles.desctop_wrap}>
        <div className={styles.desctop_wrap_text}>
          <p>Manage your budget with finance app</p>
        </div>
        <img className={styles.desctop_wrap_img} src={phoneImg} alt="" />
      </div>
      <div className={styles.main_registartion_wrap}>
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
                formik.values.confirmPass.length >= 8
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
            <button className={styles.registration__btn} type="submit">
              Enter
        </button>
          </form>
          <NavLink to="/registration" exact className={styles.login__link}>
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withAuth( Login );
