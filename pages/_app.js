import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import Script from "next/script"
import Head from "next/head"

import NavBarComp from "../components/Navbar"
import Footer from "../components/Footer"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Full Stack Web Developer</title>
        <meta
          name="description"
          content="Full Stack Web Developer specializing in the MERN Stack, which includes ReactJS, ExpressJS, NodeJS and MongoDB. Blockchain & Web3 enthusiast"
        ></meta>
      </Head>
      <NavBarComp /> <Component {...pageProps} /> <Footer />
      <Script src="https://kit.fontawesome.com/f260f67609.js"></Script>
    </>
  )
}

export default MyApp
