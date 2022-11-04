import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import "antd/dist/antd.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import NavBarComp from "../components/Navbar"
import Footer from "../components/Footer"
import { BackTop } from "antd"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarComp /> <Component {...pageProps} />
      <Analytics />
      <Footer />
      <BackTop duration={0} />
      <Script src="https://kit.fontawesome.com/f260f67609.js"></Script>
    </>
  )
}

export default MyApp
