import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";

const BgHeroImage = styled(BackgroundImage)`
  background-size: cover;
  height: 80vh;
  padding-top: 60px;
  position: relative;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(170, 7, 107, 0.3),
    rgba(97, 4, 95, 0.1)
  );
`;

const Title = styled.h1`
  color: #fff;
`;

const Description = styled.p`
  color: #fff;
`;

function Hero({ title, description }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div>
      <BgHeroImage fluid={data.file.childImageSharp.fluid}>
        <Center>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <button>call to action</button>
        </Center>
      </BgHeroImage>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
