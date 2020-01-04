/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";

import { css, jsx } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";
import Services from "./services";

import "bootstrap/dist/css/bootstrap-reboot.min.css";

const Section = ({ children, title, transparent }) => {
  return (
    <section
      css={css`
        width: 100%;
        background-color: ${transparent ? "transparent" : "#fff"};
      `}
    >
      <div
        css={css`
          max-width: 800px;
          margin: auto;
          padding: 1rem 0;
        `}
      >
        {title.trim().length > 0 ? (
          <h3
            css={css`
              text-align: center;
            `}
          >
            {title}
          </h3>
        ) : null}
        {children}
      </div>
    </section>
  );
};

Section.defaultProps = {
  title: "",
  transparent: false,
};

Section.propTypes = {
  title: PropTypes.string,
  transparent: PropTypes.bool,
};

const Layout = ({ render }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
          paddingTop: 0,
        }}
      >
        <main>{render({ paddingTop: 65 })}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
