/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  margin: 0 auto;
  background: transparent;
  z-index: 9;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
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
  `,
  linkList: css`
    display: flex;
    justify-content: space-between;
  `,
};

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
      <h2 style={{ margin: 0 }}>
        <Link to="/" css={styles.linkHome}>
          {siteTitle}
        </Link>
      </h2>
      <div css={styles.linkList}>
        <a href="#id1" css={styles.linkBtn}>
          section 1
        </a>
        <a href="#id2" css={styles.linkBtn}>
          section 2
        </a>
        <a href="#id3" css={styles.linkBtn}>
          section 3
        </a>
      </div>
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
