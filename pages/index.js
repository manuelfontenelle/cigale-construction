import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"

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
			<NavBar />
			<main className=" ">
				<section className="min-h-screen w-full h-full overflow-hidden bg-intro-bg bg-cover bg-no-repeat bg-left md:bg-[center]">
					<div className="flex justify-center items-center min-h-screen px-8">
						<Image src={logo} alt="Logo Cigale Construction" width={700} />
					</div>
				</section>
				<section className=" py-10 bg-[#0f0f0f] px-10 md:px-20 lg:px-40">
					<div className="mb-10">
						<h1 className=" text-white font-bold uppercase text-center text-2xl">
							Projets réalisés
						</h1>
						<span className="w-20 h-1 mt-2 bg-[#c3a079] block mx-auto text-center"></span>
					</div>

					<div
						className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"
						height="100%"
					>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-lg mb-3">
								Lorem Ipsum
							</h2>
							<Slider />
							<p className=" text-white font-light text-sm py-3 leading-6">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-lg mb-3">
								Lorem Ipsum
							</h2>
							<div className=" relative h-[400px]">
								<Image className="rounded-lg object-cover image" src={""} />
							</div>
							<p className=" text-white font-light text-sm py-3 leading-6">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. Lorem
								Ipsum has been the industry's standard dummy text ever since the
								1500s, when an unknown printer took a galley of type and
								scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-lg mb-3">
								Lorem Ipsum
							</h2>
							<div className=" relative h-[400px]">
								<Image className="rounded-lg object-cover image" src={""} />
							</div>
							<p className=" text-white font-light text-sm py-3 leading-6">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-lg mb-3">
								Lorem Ipsum
							</h2>
							<div className=" relative h-[400px]">
								<Image className="rounded-lg object-cover image" src={""} />
							</div>
							<p className=" text-white font-light text-sm py-3 leading-6">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
