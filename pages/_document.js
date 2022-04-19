import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  render = () =>
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />        
        <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="preload" href={"https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"} as="style" /> 
        <link href={"https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"} rel="stylesheet" />
      </Head>

      <body className={"bg-[#202632] h-screen grid place-content-center"} style={{fontFamily: '"Manrope", "sans-serif"'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
}

export default MyDocument