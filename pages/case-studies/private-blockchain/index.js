import React from "react"
import { ListGroup, Card, Container } from "react-bootstrap"
import { Collapse, Image } from "antd"
import Head from "next/head"

const Case = () => {
  return (
    <>
      <Head>
        <title>Private Blockchain for Communication</title>
        <meta
          name="description"
          content="How does a private blockchain benefit an organization"
        ></meta>
      </Head>
      <section>
        <Container className="mt-5 mb-5">
          <ListGroup>
            <ListGroup.Item variant="info" className="text-center">
              <h1 className="my-auto">Private blockchain for communication</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Card>
                <Card.Body className="text-center">
                  <h6 className="mt-3 mb-3">
                    Whilst working at my old company; Syndeno, I was asked to
                    create a <strong>permissioned-blockchain system</strong>
                    that allows <strong>departments</strong> such as{" "}
                    <strong>Marketing</strong> &{" "}
                    <strong>Producers (Vendors) </strong>
                    to access <strong>data</strong> from{" "}
                    <strong>Website stores</strong> &
                    <strong>Physical stores</strong> & their respected
                    <strong>warehouses.</strong>
                  </h6>
                  <Image
                    src="https://i.postimg.cc/fLBjtM6r/Mercadona-Flowchart.png"
                    className="imgProj"
                    alt="img"
                  ></Image>
                  <Collapse className="mt-3">
                    <Collapse.Panel header="Solution">
                      <p>
                        To solve this communication issue, I decided to develop
                        a system using Hyperlegder Fabric that consists of: 5
                        Organizations (Websites, Shops, Beehives, Warehouses &
                        Vendors) 3 Channels (Website Channel, Shop Channel,
                        Vendors Channel)
                      </p>
                    </Collapse.Panel>
                    <Collapse.Panel header="Hyperledger Channels">
                      <h5>
                        <strong>Website Channel</strong>
                      </h5>
                      <p className=" mb-4">
                        Consists of Websites Org & Beehive Org. This
                        channel&apos;s purpose is for Beehives (Website&apos;s
                        warehouses) to send their raw data to Websites, for it
                        to be reviewed then passed onto the Vendors channel for
                        Vendors.
                      </p>
                      <h5>
                        <strong>Shop Channel</strong>
                      </h5>
                      <p className=" mb-4">
                        Consists of Shop Org & Warehouse Org. This
                        channel&apos;s purpose is for Warehouses to send their
                        raw data to Shops Org, for it to be reviewed then passed
                        onto the Vendors channel for Vendors.
                      </p>
                      <h5>
                        <strong>Vendors Channel</strong>
                      </h5>
                      <p>
                        Consists of Shop Org, Website Org & Vendors Org. This
                        channel&apos;s purpose is for Vendors to finally be able
                        to view the data that has been forwarded to both Shops &
                        Websites, without having the ability to access the RAW
                        data, but the FINALIZED data. Through this solution, I
                        have made it possible for Vendors department to have the
                        ability to view passed on data from Websites &
                        Shop&apos;s respected Warehouses, whilst ensuring that
                        privacy of the raw data is remained.
                      </p>
                    </Collapse.Panel>
                  </Collapse>

                  <div className="mt-5">
                    <h4>Demo</h4>
                    <iframe
                      className="imgProj"
                      src="https://www.youtube.com/embed/i2CmejIOfp8"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </section>
    </>
  )
}

export default Case
