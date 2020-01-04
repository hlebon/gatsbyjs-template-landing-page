/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  margin: 0 auto;
  background: transparent;
  z-index: 9;
`;

const HeaderContent = styled.div`
  width: 90%;
  height: inherit;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const styles = {
  linkBtn: css`
    padding: 5px;
    margin: 5px;
    align-self: center;
  `,
  linkHome: css`
    color: #fff;
    text-decoration: none;
    line-height: 60px;
    &:hover {
      color: #fff;
      text-decoration: none;
    }
  `,
  linkList: css`
    display: flex;
    justify-content: space-between;
  `,
};

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <h4 style={{ margin: 0 }}>
        <Link to="/" css={styles.linkHome}>
          {siteTitle}
        </Link>
      </h4>
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
