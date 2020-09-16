import * as Yup from "yup";

export const toISODate = (milliseconds) => {
  const date = new Date(milliseconds);
  const y = String(date.getFullYear()).slice(2);
  let m = date.getMonth() + 1;
  let d = date.getDate();
  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  return [d, m, y].join(".");
};

export const formatNumbers = (num) => {
  const numToFixed = num.toFixed(2);
  return String(numToFixed).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
};

export const scrollToUp = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

export const registerValidationSchema = Yup.object({
  pass: Yup.string()
    .min(8, "Must be from 8 to 16 characters")
    .max(16, "Must be from 8 to 16 characters")
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
});

export const loginValidationSchema = Yup.object({
  confirmPass: Yup.string()
    .min(8, "Must be from 8 to 16 characters")
    .max(16, "Must be from 8 to 16 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});
