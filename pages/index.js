import Head from "next/head"
import NavBar from "../components/NavBar"
// import {
// 	AiFillTwitterCircle,
// 	AiFillLinkedin,
// 	AiFillYoutube,
// } from "react-icons/ai"
// import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import Image from "next/image"
import introBg from "../public/intro_bg.jpg"
import logo from "../public/logo.png"

export default function Home() {
	const [darkMode, setDarkMode] = useState(false)

	return (
		<div className={darkMode ? "dark " : ""}>
			<Head>
				<title>Cigale Construction</title>
				<meta name="description" content="Cigale Construction" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar navHome="navHome" id="navbar" />
			<main className=" bg-[#ecf0f3]">
				<section className="min-h-screen w-full h-full overflow-hidden bg-intro-bg bg-cover bg-no-repeat bg-left md:bg-[center]">
					<div className="flex justify-center items-center min-h-screen px-8">
						<Image src={logo} alt="Logo Cigale Construction" width={700} />
					</div>
				</section>
				<section className="pt-20 bg-[#ecf0f3] px-10 md:px-20 lg:px-40">
					<p></p>
				</section>
			</main>
		</div>
	)
}
