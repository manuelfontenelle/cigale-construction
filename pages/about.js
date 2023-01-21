// rafce == >  type for create react app snipper
// import React from "react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
const contact = () => {
	return (
		<div>
			<Head>
				<title>Cigale Construction - Contact</title>
				<meta name="description" content="Cigale Construction Contact" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<div className="min-h-screen bg-[#0f0f0f]">contact</div>
			<Footer />
		</div>
	)
}

export default contact
