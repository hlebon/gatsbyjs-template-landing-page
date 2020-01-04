/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useFormik } from "formik";
import * as Yup from "yup";

const styles = {
  label: css`
    margin-top: 15px;
  `,
  input: css`
    padding: 7px;
    border: 1px solid #ce7995;
    border-radius: 7px;
    &:focus {
      outline-color: #e91e63;
    }
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
      css={css`
        background-color: #fff;
        padding: 25px 15px;
        display: flex;
        flex-direction: column;
      `}
    >
      <label css={styles.label} htmlFor="firstName">
        Cual es tu nombre?
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
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label css={styles.label} htmlFor="email">
        A que email podemos contactarte?
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
      />
      <label css={styles.label} htmlFor="message">
        Mensage
      </label>
      <textarea css={styles.input} value={""} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button
        type="submit"
        css={css`
          margin-top: 25px;
          border: 2px solid #e22263;
          background: #fff;
          padding: 10px 0;
          border-radius: 7px;
        `}
      >
        ENVIAR MENSAGE
      </button>
    </form>
  );
};

export default ContactForm;
