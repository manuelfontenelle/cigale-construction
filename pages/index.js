import Head from "next/head"
import NavBar from "../components/NavBar"
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillYoutube,
} from "react-icons/ai"
import { BsFillMoonStarsFill } from "react-icons/bs"
import { useState } from "react"
import Image from "next/image"

import deved from "../public/dev-ed-wave.png"

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
			<main className="pt-20 bg-[#ecf0f3] px-10 md:px-20 lg:px-40">
				<section className="min-h-screen"></section>
			</main>
		</div>
	)
}
