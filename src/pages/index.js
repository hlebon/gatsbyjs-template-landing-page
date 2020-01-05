/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceCard from "../components/service-card";
import Hero from "../components/hero";
import ContactForm from "../components/contact";
import { graphql } from "gatsby";

// "Cálculo y presentación de ITBMS, Remesas, Informe 43",
//                   "Declaración de renta y anexos",
//                   "Estados Financieros",
//                   "Calculo de prestaciones Laborales",

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
  console.log({ nodes });
  return (
    <Layout
      render={({ paddingTop }) => {
        return (
          <>
            <SEO title="Laura" />
            <Hero />
            {/* servicios */}
            <div style={{ marginTop: "25px" }}>
              <section style={{ width: "95%", margin: "auto" }}>
                <h3
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  Servicios
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
                        console.log({ frontmatter });
                        return (
                          <li
                            key={index.toString()}
                            style={{
                              width: "calc( (100% / 2) - 10px )",
                              margin: "5px",
                              marginBottom: "10px",
                            }}
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
                    `}
                  ></div>
                </div>
              </section>
              <section
                css={css`
                  margin-top: 25px;
                  padding: 15px 0;
                  background-color: #f6f6f6;
                `}
              >
                <div
                  css={css`
                    width: 90%;
                    margin: auto;
                  `}
                >
                  <div
                    css={css`
                      padding: 50px 0;
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
                  <ContactForm />
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
