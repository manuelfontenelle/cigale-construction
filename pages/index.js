import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
// import {
// 	AiFillTwitterCircle,
// 	AiFillLinkedin,
// 	AiFillYoutube,
// } from "react-icons/ai"
// import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import Image from "next/image"
import logo from "../public/logo.png"

export default function Home() {
	// const [darkMode, setDarkMode] = useState(false)

	return (
		<div>
			<Head>
				<title>Cigale Construction</title>
				<meta name="description" content="Cigale Construction" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar navHome="navHome" />
			<main className=" ">
				<section className="min-h-screen w-full h-full overflow-hidden bg-intro-bg bg-cover bg-no-repeat bg-left md:bg-[center]">
					<div className="flex justify-center items-center min-h-screen px-8">
						<Image src={logo} alt="Logo Cigale Construction" width={700} />
					</div>
				</section>
				<section className=" py-10 bg-[#0f0f0f] px-10 md:px-20 lg:px-40">
					<p></p>
				</section>
			</main>
			<Footer />
		</div>
	)
}
