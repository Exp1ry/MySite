import React from "react"
import { Container } from "react-bootstrap"

const Footer = () => {
  return (
    <>
      <section style={{ height: "150px", backgroundColor: "#40a5f5" }}>
        <Container>
          <div className="text-white text-center pt-4">
            <h2>Have a project idea?</h2>
            <p style={{ width: "100%" }} className="mx-auto">
              Don&apos;t hesitate to drop me an email at
              <span className="text-dark d-block">fpszaid@gmail.com</span>
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

export default Footer
