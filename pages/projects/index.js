import React, { useEffect, useReducer, useLayoutEffect, useState } from "react"
import Head from "next/head"
import axios from "axios"
import { Card, Row, Col, Container, Image, Badge } from "react-bootstrap"
const Projects = (props) => {
  const { projects } = props

  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="All of my previous projects."></meta>
      </Head>
      <h1
        className="text-center text-white pt-3 pb-3 "
        style={{ backgroundColor: " #40a5f5" }}
      >
        My Projects
      </h1>
      <Container className="mt-5 mb-5">
        <Row sm={1} lg={2}>
          {projects.map((i) => {
            return i.category.includes("Production") ? (
              <Col>
                <Card key={i.id} className="text-center mt-5 pt-2">
                  <Card.Title>
                    <h2>{i.project}</h2>
                  </Card.Title>
                  <Card.Body>
                    <h4>Project Type: {i.category}</h4>
                    <p>{i.details}</p>
                    <a target={"_blank"} rel="noreferrer" href={i.link}>
                      <p>Link</p>
                    </a>
                    <Image
                      className="imgProj"
                      height={"200px"}
                      width="400px"
                      alt="img"
                      style={{ border: 1, borderStyle: "solid" }}
                      src={i.img}
                    ></Image>
                  </Card.Body>
                  <Card.Footer>
                    <Badge bg={"success"}>{i.project}</Badge>
                    {i.project.includes("ECommerce") ? (
                      <>
                        <Badge className="ms-1" bg={"info"}>
                          ReactJS
                        </Badge>
                        <Badge className="ms-1" bg={"info"}>
                          NodeJS
                        </Badge>
                        <Badge className="ms-1" bg={"info"}>
                          ExpressJS
                        </Badge>
                        <Badge className="ms-1" bg={"info"}>
                          MongoDB
                        </Badge>
                        <Badge className="ms-1" bg={"info"}>
                          StripeAPI
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Badge className="ms-1" bg={"info"}>
                          HTML
                        </Badge>
                        <Badge className="ms-1" bg={"info"}>
                          CSS
                        </Badge>
                      </>
                    )}
                  </Card.Footer>
                </Card>
              </Col>
            ) : i.category.includes("Personal") ? (
              <Col>
                <Card key={i.id} className="text-center mt-5 pt-2 ">
                  <Card.Title>
                    <h2>{i.project}</h2>
                  </Card.Title>
                  <Card.Body>
                    <h4>Project Type: {i.category}</h4>
                    <p>{i.details}</p>
                    <a target="_blank" rel="noreferrer" href={i.link}>
                      <p>Link</p>
                    </a>
                    <Image
                      className="imgProj"
                      height="200px"
                      alt="img"
                      style={{ border: 1, borderStyle: "solid" }}
                      width="400px"
                      src={i.img}
                    ></Image>
                  </Card.Body>
                  <Card.Footer>
                    <Badge bg={"success"}>{i.project}</Badge>
                    <Badge className="ms-1" bg={"info"}>
                      HTML
                    </Badge>
                    <Badge className="ms-1" bg={"info"}>
                      CSS
                    </Badge>
                    <Badge className="ms-1" bg={"info"}>
                      JavaScript
                    </Badge>
                  </Card.Footer>
                </Card>
              </Col>
            ) : (
              ""
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await axios.get("https://zaid-server.herokuapp.com/projects")

  return {
    props: {
      projects: data,
    },
    revalidate: 60,
  }
}

export default Projects
