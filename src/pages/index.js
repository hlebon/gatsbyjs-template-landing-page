/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceCard from "../components/service-card";
import Hero from "../components/hero";
import ContactForm from "../components/contact";
import { graphql } from "gatsby";

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          icon {
            childImageSharp {
              fixed(width: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes },
  } = data;
  const formRef = React.useRef(null);
  return (
    <Layout
      render={() => {
        return (
          <>
            <SEO title="Laura" />
            <Hero
              onClick={() => {
                console.log(
                  formRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                );
              }}
            />
            {/* servicios */}
            <div style={{ marginTop: "25px" }}>
              <section
                css={css`
                  width: 95%;
                  margin: 5rem auto;
                  @media (min-width: 700px) {
                    width: 70%;
                  }
                  @media (min-width: 1200px) {
                    width: 55%;
                  }
                  @media (min-width: 1400px) {
                    width: 50%;
                  }
                `}
              >
                <h3
                  css={css`
                    width: 100%;
                    font-size: 30px;
                    line-height: 1.33;
                    font-family: Montserrat, Helvetica Neue, Helvetica, Roboto,
                      Arial, sans-serif;
                    text-align: center;
                    margin-bottom: 15px;
                  `}
                >
                  En lo que podemos ayudarte
                </h3>
                <div
                  css={css`
                    display: flex;
                    flex-wrap: wrap;
                  `}
                >
                  <div
                    css={css`
                      width: 100%;
                      @media (min-width: 1200px) {
                        width: 50%;
                      }
                    `}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        paddingLeft: "0",
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      {nodes.map(({ frontmatter }, index) => {
                        return (
                          <li
                            key={index.toString()}
                            css={css`
                              width: calc((100% / 2) - 10px);
                              margin: 5px;
                              margin-bottom: 10px;
                            `}
                          >
                            <ServiceCard
                              description={frontmatter.title}
                              icon={frontmatter.icon.childImageSharp}
                              onPress={() => {}}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div
                    css={css`
                      width: 100%;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      @media (min-width: 1200px) {
                        width: 50%;
                      }
                    `}
                  >
                    <div
                      css={css`
                        padding: 0;
                        @media (min-width: 1200px) {
                          padding-left: 2rem;
                        }
                      `}
                    >
                      <h3>Services que necesitas</h3>
                      <p
                        css={css`
                          font-size: 2rem;
                          font-family: "Droid Serif", Palatino Linotype,
                            Book Antiqua, Palatino, FreeSerif, serif;
                          font-style: italic;
                        `}
                      >
                        En esta seccion puedes escribir una frase extensa para
                        dar al conocer al cliente porque deberia usar comprar
                        tus servicios y no solo eso sino de los beneficios que
                        obtendra al hacerlo.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                id={"contact"}
                ref={formRef}
                css={css`
                  padding: 15px 0;
                  background-color: #f6f6f6;
                `}
              >
                <div
                  css={css`
                    width: 90%;
                    margin: 5rem auto;
                    @media (min-width: 700px) {
                      width: 70%;
                    }
                    @media (min-width: 1200px) {
                      width: 55%;
                    }
                    @media (min-width: 1400px) {
                      width: 50%;
                    }
                  `}
                >
                  <div
                    css={css`
                      text-align: center;
                    `}
                  >
                    <h3
                      css={css`
                        text-align: center;
                        font-size: 30px;
                        line-height: 1.33;
                        font-family: Montserrat, Helvetica Neue, Helvetica,
                          Roboto, Arial, sans-serif;
                      `}
                    >
                      Trabajemos juntos
                    </h3>
                    <p
                      css={css`
                        margin-bottom: 2rem;
                        text-align: center;
                        font-family: "Droid Serif", Palatino Linotype,
                          Book Antiqua, Palatino, FreeSerif, serif;
                        font-style: italic;
                      `}
                    >
                      Completa el formulario para que podemos aprender mas de lo
                      que necesitas
                    </p>
                  </div>
                  <div
                    css={css`
                      display: flex;
                      flex-wrap: wrap;
                    `}
                  >
                    <div
                      css={css`
                        width: 100%;
                        @media (min-width: 1200px) {
                          width: 50%;
                        }
                        @media (min-width: 1400px) {
                          width: 50%;
                        }
                      `}
                    >
                      <ContactForm />
                    </div>
                    <div
                      css={css`
                        width: 100%;
                        @media (min-width: 1200px) {
                          width: 50%;
                        }
                        @media (min-width: 1400px) {
                          width: 50%;
                        }
                        font-family: "Droid Serif", Palatino Linotype,
                          Book Antiqua, Palatino, FreeSerif;
                      `}
                    >
                      <div
                        css={css`
                          padding: 1rem;
                          margin-top: 2.5rem;
                          @media (min-width: 1200px) {
                            padding: 2rem 1rem 2rem 4rem;
                          }
                        `}
                      >
                        <div>
                          <h4>Direccion</h4>
                          <div>
                            Las oficinas están ubicadas en Vía España , calle
                            Otilia A. De Tejeira. Edificio Centro Empresarial
                            Mar Del Sur - piso #4 Oficina 4-11
                          </div>
                        </div>
                        <div
                          css={css`
                            margin-top: 1rem;
                          `}
                        >
                          <h4>Telefono y Email</h4>
                          <p>(507) 234-7569</p>
                          <p>test@test.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        );
      }}
    ></Layout>
  );
};

export default IndexPage;
