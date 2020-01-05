/** @jsx jsx */

import PropTypes from "prop-types";
import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/core";
import { FaLocationArrow } from "react-icons/fa";

const BgHeroImage = styled(BackgroundImage)`
  background-size: cover;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Hero({ onClick }) {
  const { file, site } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <BgHeroImage fluid={file.childImageSharp.fluid}>
      <div
        css={css`
          width: 100%;
          height: inherit;
          padding-top: 100px;
          padding-bottom: 100px;
          background-image: linear-gradient(
            133deg,
            rgba(26, 2, 42, 0.75),
            rgba(130, 0, 42, 0.6)
          );
        `}
      >
        <div
          css={css`
            margin: 100px 0 50px 0;
          `}
        >
          <h1
            css={css`
              font-size: 36px;
              font-family: Montserrat, Helvetica Neue, Helvetica, Roboto, Arial,
                sans-serif;
              line-height: 1.33;
              color: #fff;
            `}
          >
            {site.siteMetadata.title}
          </h1>
          <p
            css={css`
              color: #fff;
              padding: 10px;
              line-height: 1.75;
              font-size: 16px;
              font-family: "Droid Serif", Palatino Linotype, Book Antiqua,
                Palatino, FreeSerif, serif;
              font-style: italic;
            `}
          >
            {site.siteMetadata.description}
          </p>
          <button
            onClick={onClick}
            css={css`
              background-color: transparent;
              margin: 15px 0;
              padding: 7px 30px;
              border-radius: 25px;
              border: 2px solid #e91e63;
              color: #fff;
              font-size: 1.3rem;
              cursor: pointer;
              &:active {
                border-color: pink;
              }
            `}
          >
            Contacto <FaLocationArrow />
          </button>
        </div>
      </div>
    </BgHeroImage>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
