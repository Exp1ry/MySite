import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import Script from "next/script"
import { Analytics } from "@vercel/analytics"
import NavBarComp from "../components/Navbar"
import Footer from "../components/Footer"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarComp /> <Component {...pageProps} />
      <Analytics />
      <Footer />
      <Script src="https://kit.fontawesome.com/f260f67609.js"></Script>
    </>
  )
}

export default MyApp
