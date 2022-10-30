import Head from "next/head"
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

export default function Home() {
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
          <Row
            className={
              typeof window !== "undefined" && window.innerWidth > 490
                ? `d-flex mt-5  `
                : "d-block mt-5 "
            }
          >
            <Col className="borderDiv pb-3 w-75 mx-auto">
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
            <Col
              className={
                typeof window !== "undefined" && window.innerWidth > 490
                  ? "borderDiv w-75 pb-3 mx-2 ms-2 "
                  : "borderDiv w-75 pb-3 mx-auto"
              }
            >
              <div
                className="mx-auto skillsDivTwo mt-3 "
                style={{ borderRadius: "50%", width: "75px", height: "75px" }}
              ></div>
              <h5 className="text-center pt-5 ">Back End</h5>
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
            <Col className="borderDiv pb-3 w-75 mx-auto">
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
              <Row className="">
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Smart Contracts</p>
                </div>
              </Row>
              <Row className="">
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">NFTs / Tokens</p>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container style={{ marginTop: "150px" }} className="mb-5">
          <h2 className="text-center mb-5">What my clients think</h2>
          <Carousel variant="dark" className="boxShadow">
            <Carousel.Item>
              <Card>
                <Card.Title className="mx-auto "></Card.Title>
                <h3 className="ms-5">
                  <i
                    class="fa-solid fa-quote-left"
                    style={{ color: "#40a5f5" }}
                  ></i>
                </h3>
                <Card.Body className="mx-auto pt-3 pb-5 ">
                  <Image
                    className="d-block mx-auto mb-5"
                    roundedCircle={true}
                    height={"100px"}
                    alt="img"
                    width={"125px"}
                    src="https://i.postimg.cc/L5WT8HJq/testman.webp"
                  ></Image>
                  <div>
                    <h3 className="text-center">Josh</h3>
                    <p className="w-75 mx-auto">
                      For a junior developer, Zaid showed a vast amount of
                      knowledge. All tasks were completed in time, and up to
                      standard. 100% would recommened him.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Title className="mx-auto "></Card.Title>
                <h3 className="ms-5">
                  <i
                    class="fa-solid fa-quote-left"
                    style={{ color: "#40a5f5" }}
                  ></i>
                </h3>
                <Card.Body className="mx-auto pt-3 pb-5 ">
                  <Image
                    className="d-block mx-auto mb-5"
                    roundedCircle={true}
                    height={"100px"}
                    alt="img"
                    width={"125px"}
                    src="https://i.postimg.cc/L5WT8HJq/testman.webp"
                  ></Image>
                  <div>
                    <h3 className="text-center">Alex</h3>
                    <p className="w-75 mx-auto">
                      Zaid did an outstanding job completing our given tasks. He
                      did everything we spoke about, and had great
                      commmunication.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  )
}
