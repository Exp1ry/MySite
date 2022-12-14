import Head from "next/head"
import "../styles/Home.module.css"
import {
  Container,
  Row,
  Col,
  Image,
  Carousel,
  Card,
  Badge,
  Button,
} from "react-bootstrap"

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Web Developer specializing in the MERN Stack, which includes ReactJS, ExpressJS, NodeJS and MongoDB. Blockchain & Web3 enthusiast"
        ></meta>
      </Head>
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
            <h1 className="text-white">
              <strong>Zaid Widyan</strong>
            </h1>
            <p>
              Self taught<span className="text-dark"> Web Developer</span> with
              hands-on experience with technologies like{" "}
              <span className="text-dark">SQL & NoSQL</span>,{" "}
              <span className="text-dark">ExpressJS</span>,{" "}
              <span className="text-dark">ReactJS</span>,{" "}
              <span className="text-dark">NodeJS</span>,{" "}
              <span className="text-dark">NextJS</span>,{" "}
              <span className="text-dark">Typescript</span> and many packages.
              Extensive experience with{" "}
              <span className="text-dark">Blockchain</span> development using{" "}
              <span className="text-dark">Hyperledger Fabric</span>, using
              technoligies like <span className="text-dark">Docker</span>,
              <span className="text-dark">Docker Compose</span>, VM&apos;s,
              Apache Kafka
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
              <a href="https://drive.google.com/file/d/1EsW4yOYxnFR_5oilksMdjlzxZisYUJBI/view?usp=share_link">
                Download my CV
              </a>
            </span>
          </p>
        </Container>
        <Container>
          <Row className={" mt-5"}>
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
                  <p className="my-auto ms-2">TypeScript</p>
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
                  <p className="my-auto ms-2">HTML/CSS/SASS</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">TailwindCSS</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">UX/UI</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Webpack</p>
                </div>
              </Row>
            </Col>
            <Col className={" borderDiv w-75 pb-3 mx-auto ms-2 "}>
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
                  <p className="my-auto ms-2">PostgreSQL</p>
                </div>
              </Row>
              <Row>
                <div className="d-flex ms-1">
                  <i class="fa-solid fa-check text-primary"></i>
                  <p className="my-auto ms-2">Clean Architecture</p>
                </div>
              </Row>
            </Col>
            <Col className="borderDiv pb-3 w-75 mx-2">
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

      <section className="pb-5">
        <Container style={{ marginTop: "150px" }} className="mb-5 pb-5">
          <h2 className="text-center mb-5">Client Feedback</h2>
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
                  {/* <Image
                    className="d-block mx-auto mb-5"
                    roundedCircle={true}
                    height={"100px"}
                    alt="img"
                    width={"125px"}
                    src="https://i.postimg.cc/7hKLr8nr/man3.jpg"
                  ></Image> */}
                  <div>
                    <h3 className="text-center">Josh</h3>
                    <p className="w-75 mx-auto text-center">
                      For a junior developer, Zaid showed a vast amount of
                      knowledge. All tasks were completed in time, and up to
                      standard. Would recommend.
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
                  {/* <Image
                    className="d-block mx-auto mb-5"
                    roundedCircle={true}
                    height={"100px"}
                    alt="img"
                    width={"125px"}
                    src="https://i.postimg.cc/L5WT8HJq/testman.webp"
                  ></Image> */}
                  <div>
                    <h3 className="text-center">Alex</h3>
                    <p className="w-75 mx-auto text-center">
                      Zaid did an outstanding job completing our given tasks. He
                      did everything we spoke about, and had great
                      commmunication. Zaid is an all round great developer.
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
