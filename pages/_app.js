import "../styles/globals.css"
import "bootstrap/dist/css/bootstrap.css"
import Script from "next/script"

import NavBarComp from "../components/Navbar"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBarComp /> <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/f260f67609.js"></Script>
    </>
  )
}

export default MyApp
