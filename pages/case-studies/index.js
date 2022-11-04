import { Image } from "antd"
import React from "react"
import { Card, Container } from "react-bootstrap"
import { Button } from "antd"
import Link from "next/link"
import Head from "next/head"

const index = () => {
  return (
    <>
      <Head>
        <title>Case Studies</title>
        <meta name="description" content="My case studies"></meta>
      </Head>
      <div style={{ backgroundColor: " #40a5f5" }}>
        <h1 className="text-center text-white pt-3  ">Case Studies</h1>
        <h6 className="text-center pb-3 text-white">
          In depth cases and analysis for different types of technologies
        </h6>
      </div>
      <Container className="mt-5 mb-5">
        <Card className="w-75 mx-auto">
          <Card.Title className="text-center pt-3">
            <h3>Private blockchain for enterprises</h3>
          </Card.Title>
          <Card.Body className="mx-auto">
            <Image
              src="https://i.postimg.cc/T32JqLc3/fabric.png"
              className="imgProj"
            ></Image>
          </Card.Body>
          <Card.Footer className="mx-auto">
            <Link href={"/case-studies/private-blockchain"}>
              <Button>Find out more</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}

export default index
