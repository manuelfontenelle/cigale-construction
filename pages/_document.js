import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
				{/* <link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
				/> */}
			</Head>
			<body className="font-inter">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
