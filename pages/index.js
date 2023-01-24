import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import "flowbite"
// import {
// 	AiFillTwitterCircle,
// 	AiFillLinkedin,
// 	AiFillYoutube,
// } from "react-icons/ai"
// import { BsFillMoonStarsFill } from "react-icons/bs"
import { useEffect } from "react"

import Image from "next/image"
import logo from "../public/logo.png"
import slide1 from "../public/slide1.jpg"
import slide2 from "../public/slide2.jpg"
import slide3 from "../public/slide3.jpg"
import slide4 from "../public/slide4.jpg"
import slide5 from "../public/slide5.jpg"

export default function Home() {
	// 	// const [darkMode, setDarkMode] = useState(false)
	// 	useEffect(() => {
	// 		const use = async () => {
	// 			;(await import("tw-elements")).default
	// 		}
	// 		use()
	// 	}, [])

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
					<div className="my-10">
						<h1 className=" text-white font-bold uppercase text-center text-3xl">
							Projets réalisés
						</h1>
						<span className="w-20 h-1 mt-2 bg-[#c3a079] block mx-auto text-center"></span>
					</div>

					<div
						className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap"
						height="100%"
					>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4">
								Lorem Ipsum
							</h2>
							<Slider
								slide1={slide1}
								slide2={slide2}
								slide3={slide3}
								slide4={slide4}
								slide5={slide5}
							/>
							<p className=" text-white font-light text-reg mt-10 leading-7">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4">
								Lorem Ipsum
							</h2>
							<Slider
								slide1={slide3}
								slide2={slide4}
								slide3={slide1}
								slide4={slide2}
								slide5={slide5}
							/>
							<p className=" text-white font-light text-reg mt-10 leading-7">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4">
								Lorem Ipsum
							</h2>
							<Slider
								slide1={slide2}
								slide5={slide5}
								slide2={slide3}
								slide3={slide4}
								slide4={slide1}
							/>
							<p className=" text-white font-light text-reg mt-10 leading-7">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4">
								Lorem Ipsum
							</h2>
							<Slider
								slide1={slide1}
								slide2={slide2}
								slide3={slide3}
								slide4={slide4}
								// slide4={slide4}
							/>
							<p className=" text-white font-light text-reg mt-10 leading-7">
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
