/** @jsx jsx */
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { css, jsx } from "@emotion/core";
import Img from "gatsby-image";

const styles = {
  container: css`
    width: 100%;
    min-height: 130px;
    padding: 10px;
    background: #fff;
    color: black;
    border-radius: 7px;
    border: 2px solid pink;
    box-shadow: rgb(234, 234, 234) 1px 2px 3px;
    transform: translateY(0);
    transition: transform 300ms ease-out, box-shadow 300ms ease-out;
    &:hover {
      transform: translateY(-5px);
      box-shadow: rgb(234, 234, 234) 2px 8px 15px;
      transition: transform 300ms ease-out, box-shadow 300ms ease-out;
    }
  `,
  content: css`
    min-height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  button: css`
    width: 30px;
    height: 30px;
    padding: 0;
    border: 1px solid #fff;
    border-radius: 25px;
    background-color: #fff;
    &:hover {
      background-color: #fff;
      border-color: pink;
    }
    &:focus {
      outline: none;
    }
  `,
};

function ServiceCard({ description, icon, onPress }) {
  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <div
          css={css`
            width: 100%;
            flex: 1.2;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <Img fixed={icon.fixed} />
        </div>
        <div
          css={css`
            width: 100%;
            flex: 0.8;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <h5
            css={css`
              font-size: 16px;
              font-weight: 700;
              text-align: center;
              line-height: 1.33;
              font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial,
                sans-serif;
              color: #4c3d54;
            `}
          >
            {description}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
