import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getintialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta
						httpEquiv="Content-Type"
						content="text/html;charset=UTF-8"
					/>
					<meta name="author" content="Anggih Septiawan" />
					<meta
						name="description"
						content="Anggih Septiawan's portfolio"
					/>

					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
