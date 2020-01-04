/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ServiceCard from "../components/service-card";
import Hero from "../components/hero";
import ContactForm from "../components/contact";

// "Cálculo y presentación de ITBMS, Remesas, Informe 43",
//                   "Declaración de renta y anexos",
//                   "Estados Financieros",
//                   "Calculo de prestaciones Laborales",

const IndexPage = () => (
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
                    {[
                      "Contabilidad General",
                      "Asesoría Fiscal",
                      "Planilla de pago",
                      "Reportes a la CSS",
                    ].map((s, index) => {
                      return (
                        <li
                          key={index.toString()}
                          style={{
                            width: "calc( (100% / 2) - 10px )",
                            margin: "5px",
                            marginBottom: "10px",
                          }}
                        >
                          <ServiceCard description={s} onPress={() => {}} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  css={css`
                    width: 100%;
                  `}
                >
                  Otro tema
                </div>
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
                      font-size: 28px;
                    `}
                  >
                    Trabajemos juntos
                  </h3>
                  <p
                    css={css`
                      text-align: center;
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

export default IndexPage;
