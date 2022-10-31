import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Roboto+Mono:wght@200&display=swap"
            rel="stylesheet"
          ></link>
          <title>Full Stack Web Developer</title>
          <meta
            name="description"
            content="Full Stack Web Developer specializing in the MERN Stack, which includes ReactJS, ExpressJS, NodeJS and MongoDB. Blockchain & Web3 enthusiast"
          ></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
