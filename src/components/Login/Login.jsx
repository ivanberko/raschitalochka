import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Login/login.module.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import logo from '../../images/registration/logo.jpg';

const Login = () => {

    const formik = useFormik( {
        initialValues: {
            pass: '',
            confirmPass: '',
            email: '',
            userName: '',
        },
        validationSchema: Yup.object( {
            pass: Yup.string()
                .min( 8, 'Must be from 8 to 16 characters' )
                .required( 'Required' ),
            confirmPass: Yup.string()
                .min( 8, 'Must be from 8 to 16 characters' )
                .max( 16, 'Must be from 8 to 16 characters' )
                .required( 'Required' ),
            email: Yup.string()
                .email( 'Invalid email address' )
                .required( 'Required' ),
            userName: Yup.string()
                .min( 4, 'Must be from 6 to 12 characters' )
                .max( 12, 'Must be from 6 to 12 characters' )
                .required( 'Required' ),
        } ),
        onSubmit: values => {
            if( formik.values.pass === formik.values.confirmPass && formik.values.userName.length >= 4 ) {
                alert( JSON.stringify( values, null, 2 ) );
            } else alert( 'Please confirm your password' );
        },
    } );


    return (
        <div className={styles.registration__wrap}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h2 className={styles.registration__wrap_title}>Raschitalochka</h2>
            <form className={styles.registration__wrap_form} onSubmit={formik.handleSubmit}>
                <input
                    className={formik.errors.email || formik.values.email === "" ? styles.email__input : `${styles.email__input} ${styles.active}`}
                    placeholder='E-mail as Login'
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div></div>
                ) : null}
                <input
                    className={formik.values.pass.length >= 8 ? `${styles.pass__input} ${styles.active}` : styles.pass__input}
                    placeholder='Password Confirmation'
                    id="confirmPass"
                    name="confirmPass"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPass}
                />
                <button className={styles.registration__btn} type="submit">Enter</button>
            </form>
            <NavLink
                to='/' exact
                className={styles.login__link}
            >Register</NavLink>
            <div className={styles.bg__wrap}>
            </div>
        </div >
    )
}

export default Login;