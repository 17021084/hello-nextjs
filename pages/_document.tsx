import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  /**  ko dung  duoc ca effect o day*/
  render() {
    console.log('chi load dc tren server')
    return (
      <Html>
        <Head>
          {/* dung de SEO */}
          <meta property="custom" content="yolo"/>
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
