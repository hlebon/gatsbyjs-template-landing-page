/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";

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

const bounce = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(359deg);
}
`;

const ContactForm = () => {
  const [status, setStatus] = React.useState("IDLE"); // IDLE, SUCCESS, ERROR, CANCEL, PROCESS

  React.useEffect(() => {
    if (status !== "PROGRESS") {
      return null;
    }
    let didCancel = false;
    function sendMessage() {
      setTimeout(() => {
        if (!didCancel) {
          setStatus("SUCCESS");
        }
      }, 3000);
    }
    sendMessage();
    return () => {
      didCancel = true;
    };
  }, [status]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      message: Yup.string()
        .min(10, "Must be 10 characteres or more")
        .required("Required"),
    }),

    onSubmit: (values, { setSubmitting, setStatus }) => {
      async function sendMessage() {
        setTimeout(() => {
          setSubmitting(false);
          setStatus("ERROR");
        }, 5000);
      }
      sendMessage();
    },
  });

  console.log({ formik });
  return (
    <>
      {formik.submitCount > 0 &&
      (formik.status === "SUCCESS" || formik.status === "ERROR") ? (
        <div
          css={css`
            background-color: ${formik.status === "ERROR"
              ? "#e91e63"
              : "#8bc34a"};
            box-shadow: 1px 2px 10px #c7c7c7;
            padding: 15px 25px;
            display: flex;
            flex-direction: column;
          `}
        >
          <div
            css={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                color: white;
                font-weight: 600;
                font-family: Montserrat, Helvetica Neue, Helvetica, Roboto,
                  Arial, sans-serif;
              `}
            >
              {formik.status === "ERROR"
                ? "Hemos tenido un inconveniente, intentalo mas tarde"
                : "Mensaje Enviado!"}
            </div>
            <div>
              {formik.status === "ERROR" ? (
                <AiOutlineCloseCircle size={"30"} color={"#fff"} />
              ) : (
                <AiOutlineCheckCircle size={30} color={"#fff"} />
              )}
            </div>
          </div>
        </div>
      ) : null}

      <form
        onSubmit={formik.handleSubmit}
        autoComplete={"off"}
        css={css`
          background-color: #fff;
          box-shadow: 1px 2px 10px #c7c7c7;
          padding: 25px 25px;
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
          disabled={formik.isSubmitting}
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
          disabled={formik.isSubmitting}
        />
        {formik.touched.email && formik.errors.email ? (
          <small css={styles.error}>{formik.errors.email}</small>
        ) : null}
        <label css={styles.label} htmlFor="message">
          MENSAJE
        </label>
        <textarea
          css={styles.input}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          id="message"
          name="message"
          disabled={formik.isSubmitting}
        />
        <button
          type="submit"
          disabled={formik.isSubmitting}
          css={css`
            margin-top: 25px;
            border: 2px solid #e22263;
            background: ${formik.isSubmitting ? "#fff" : "#e22263"};
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
          {formik.isSubmitting ? (
            <div
              css={css`
                animation: ${bounce} 2s infinite linear;
              `}
            >
              <FaSpinner color={"#e22263"} />
            </div>
          ) : (
            "ENVIAR MENSAJE"
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
