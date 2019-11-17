/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";

function Service({ title, description }) {
  return (
    <div
      css={css`
        padding: 1.2rem;
        background-color: #fff;
        border: 1px solid #d6d6d6;
      `}
    >
      <h5
        css={css`
          font-size: 1.2rem;
          text-align: center;
        `}
      >
        {title}
      </h5>
      <p
        css={css`
          font-size: 1rem;
        `}
      >
        {description}
      </p>
    </div>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Services() {
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
      `}
    >
      <Service
        title={"Servicio 1"}
        description={
          "Description de una servicio que pueda tener varios caracteres"
        }
      />
      <Service
        title={"Servicio 2"}
        description={
          "Description de una servicio que pueda tener varios caracteres"
        }
      />
      <Service
        title={"Servicio 3"}
        description={
          "Description de una servicio que pueda tener varios caracteres"
        }
      />
    </div>
  );
}

export default Services;
