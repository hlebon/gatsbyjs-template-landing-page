/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useFormik } from "formik";
import * as Yup from "yup";

const styles = {
  label: css`
    margin-top: 15px;
    letter-spacing: 1.5px;
    font-size: 12px;
    font-weight: 700;
    color: #4c3d54;
    font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
  `,
  input: css`
    padding: 10px 20px;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    font-family: "Droid Serif", Palatino Linotype, Book Antiqua, Palatino,
      FreeSerif;
    &:focus {
      outline-color: pink;
      outline-style: auto;
      outline-width: 5px;
    }
  `,
  error: css`
    font-family: "Droid Serif", Palatino Linotype, Book Antiqua, Palatino,
      FreeSerif;
    color: red;
    margin-top: 5px;
  `,
};

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      autoComplete={"off"}
      css={css`
        background-color: #fff;
        box-shadow: 1px 2px 10px #c7c7c7;
        padding: 25px 15px;
        display: flex;
        flex-direction: column;
      `}
    >
      <label css={styles.label} htmlFor="firstName">
        CUAL ES TU NOMBRE?
      </label>
      <input
        css={styles.input}
        id="firstName"
        name="firstName"
        type="text"
        placeholder={"Nombre completo"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        required
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <small css={styles.error}>{formik.errors.firstName}</small>
      ) : null}
      <label css={styles.label} htmlFor="email">
        A QUE EMAIL PODEMOS CONTACTARTE?
      </label>
      <input
        css={styles.input}
        id="email"
        name="email"
        type="email"
        placeholder={"joe@email.com"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        required
      />
      {formik.touched.email && formik.errors.email ? (
        <small css={styles.error}>{formik.errors.email}</small>
      ) : null}
      <label css={styles.label} htmlFor="message">
        MENSAJE
      </label>
      <textarea css={styles.input} value={""} />
      <button
        type="submit"
        css={css`
          margin-top: 25px;
          border: 2px solid #e22263;
          background: #e22263;
          color: #fff;
          padding: 10px 0;
          border-radius: 7px;
          letter-spacing: 1px;
          font-weight: 700px;
          font-size: 16px;
          font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial,
            sans-serif;
          &:active {
            background: #e73536;
            border-color: #e73536;
          }
        `}
      >
        ENVIAR MENSAGE
      </button>
    </form>
  );
};

export default ContactForm;
