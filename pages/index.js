import Head from "next/head"
import { useEffect } from "react"
import "../styles/Home.module.css"
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Carousel,
  Card,
  Badge,
} from "react-bootstrap"

import Link from "next/link"

export default function Home() {
  useEffect(() => {
    console.log("first")
  })
  return (
    <>
      <section style={{ backgroundColor: "#40a5f5" }}>
        <Container className="forMedia pt-5 pb-5">
          <Image
            src="https://i.postimg.cc/V63NhkF4/profilepic.jpg"
            height={"250px"}
            width={"215px"}
            alt="img"
            className="mx-auto d-flex"
            style={{ borderRadius: "10%" }}
          ></Image>
          <div className="mainText text-white">
            <p>Hello, my name is</p>
            <h1>Zaid Widyan</h1>
            <p>
              Self taught Web Developer with hands-on experience with
              technologies like MongoDB, ExpressJS, ReactJS, NodeJS, NextJS,
              Typescript and many packages. Extensive experience with Blockchain
              development Hyperledger Fabric, using technoligies like Docker,
              Docker-compose, VM&apos;s, Apache Kafka
            </p>

            <a href="https://www.linkedin.com/in/zaidwidyan/">
              <Button>
                <strong>Hire Me</strong>
              </Button>
            </a>
          </div>
        </Container>
      </section>
      <section>
        <Container className="mt-5 text-center">
          <h2>Skills Overview</h2>
          <p style={{ width: "70%", color: "grey" }} className="mx-auto">
            As a Junior Full Stack Developer, I have worked with a handful of
            companies, on open source projects, and even hired to create
            platforms for companies.{" "}
            <span className="text-primary d-block">
              {" "}
              <a href="https://drive.google.com/uc?export=download&id=1EsW4yOYxnFR_5oilksMdjlzxZisYUJBI">
                Download my CV
              </a>
            </span>
          </p>
        </Container>
        <Container>
          <Row className="mt-5">
            <Col className="borderDiv pb-3 ">
              <div
                className="mx-auto skillsDivThree mt-3"
                style={{
                  borderRadius: "50%",
                  width: "75px",
                  height: "75px",
                }}
              ></div>
              <h5 className="text-center pt-5">Front End</h5>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">JavaScript</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">ReactJS</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">NextJS</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Webpack</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">HTML/CSS/SASS</p>
                </div>
              </Row>
            </Col>
            <Col className="borderDiv ">
              <div
                className="mx-auto skillsDivTwo mt-3 "
                style={{ borderRadius: "50%", width: "75px", height: "75px" }}
              ></div>
              <h5 className="text-center pt-5">Back End</h5>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">NodeJS</p>
                </div>
              </Row>
              <Row className>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">ExpressJS</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">ElasticSearch</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">MongoDB</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Clean Architecture</p>
                </div>
              </Row>
            </Col>
            <Col className="borderDiv">
              <div
                className="mx-auto skillsDiv mt-3"
                style={{ borderRadius: "50%", width: "75px", height: "75px" }}
              ></div>
              <h5 className="text-center pt-5">Blockchain</h5>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Hyperledger Fabric</p>
                </div>
              </Row>
              <Row className>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Solidity</p>
                </div>
              </Row>
              <Row className="text-center">
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Smart Contracts</p>
                </div>
              </Row>
              <Row className="text-center">
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">NFTs / Tokens</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ marginTop: "100px" }} className="mb-5">
        <Container className="text-center">
          <h2 className="">My Projects</h2>
          <Row className="mt-5">
            <Col>
              <Card className=" mx-auto h-100">
                <Card.Header className="mt-1">
                  {" "}
                  <a href="https://www.lotshouse.com">eCommerce Site</a>
                </Card.Header>
                <Card.Body>
                  <Image
                    src="https://i.postimg.cc/kG82BFDx/productsss.png"
                    width={"100%"}
                    alt="img"
                  ></Image>
                </Card.Body>
                <Card.Footer>
                  <Badge bg={"success"}>eCommerce</Badge>
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
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className=" mx-auto h-100">
                <Card.Header className="mt-1 ">Company Site</Card.Header>
                <Card.Body>
                  <Image
                    src="https://i.postimg.cc/qMw3nwjL/Screenshot-from-2022-08-28-16-14-34.png"
                    alt="img"
                    width={"100%"}
                  ></Image>
                </Card.Body>
                <Card.Footer>
                  <Badge bg={"success"}>Custom</Badge>

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
                </Card.Footer>
              </Card>
            </Col>
            <Col>
              <Card className=" mx-auto h-100 blockchainProject">
                <Card.Header className="mt-1">
                  <a href="https://youtu.be/i2CmejIOfp8">
                    Blockchain Communication System
                  </a>
                </Card.Header>
                <Card.Body>
                  <Image
                    src="https://i.postimg.cc/xjhdG5CS/fabric.png"
                    alt="img"
                    width={"100%"}
                  ></Image>
                </Card.Body>
                <Card.Footer>
                  <Badge bg={"success"}>Blockchain</Badge>

                  <Badge className="ms-1" bg={"info"}>
                    Permissioned
                  </Badge>
                  <Badge className="ms-1" bg={"info"}>
                    Docker
                  </Badge>
                  <Badge className="ms-1" bg={"info"}>
                    CouchDB
                  </Badge>
                  <Badge className="ms-1" bg={"info"}>
                    Terminal
                  </Badge>
                  <Badge className="ms-1" bg={"info"}>
                    Google Console
                  </Badge>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ height: "150px", backgroundColor: "#40a5f5" }}>
        <Container>
          <div className="text-white text-center pt-4">
            <h2>Need a Passionate Developer?</h2>
            <p style={{ width: "100%" }} className="mx-auto">
              Don&apos;t hesitate to contact me through any of my socials to
              discuss project matters, or just drop me an email at{" "}
              <span className="text-dark">fpszaid@gmail.com</span>
            </p>
          </div>
        </Container>
      </section>
      <section style={{ height: "30px", backgroundColor: "#434f5f" }}>
        <p className="text-white text-center">&copy; Zaid Widyan </p>
      </section>
    </>
  )
}
