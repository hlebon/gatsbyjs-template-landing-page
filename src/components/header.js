import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  margin: 0 auto;
  background: #fff;
  z-index: 9;
`;

const HeaderContent = styled.div`
  min-width: 800px;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `gray`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContent>
  </HeaderContainer>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
