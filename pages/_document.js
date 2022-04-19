import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
	render = () =>
		<Html lang="en">
			<Head>
				<meta charSet="utf-8" />
				<meta name="author" content="Deepak Parmar" />
				<meta property="og:description" name="description" content="frontend-mentor, adviceslip-api, advice, advice-slip-generator, next-js, tailwind, fetch-api, herokuapp, heroku" />

				<meta property="og:title" content="Advice Slip Generator" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://advice-generator.herokuapp.com" />
				<meta property="og:site_name" content="advice-generator.herokuapp.com" />

				<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link rel="preload" href={"https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"} as="style" />
				<link href={"https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"} rel="stylesheet" />
			</Head>

			<body className={"bg-[#202632] h-screen grid place-content-center"} style={{ fontFamily: '"Manrope", "sans-serif"' }}>
				<Main />
				<NextScript />
			</body>
		</Html>
}

export default MyDocument