import Head from "next/head"
// import "flowbite"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import SliderTxt from "../components/SliderTxt"
import SliderTxt2 from "../components/SliderTxt2"

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
import ratesIcon from "../public/rates-icon.svg"
import archiIcon from "../public/archi-icon.svg"

export default function Home() {
	// 	// const [darkMode, setDarkMode] = useState(false)
	useEffect(() => {
		const use = async () => {
			;(await import("tw-elements")).default
		}
		use()
	}, [])

	return (
		<div className="relative">
			<Head>
				<title>Cigale Construction</title>
				<meta name="description" content="Cigale Construction" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<main>
				<section className="min-h-screen w-full h-full overflow-hidden bg-intro-bg bg-cover bg-no-repeat bg-left md:bg-[center]">
					<div className="flex justify-center items-center min-h-screen px-8">
						<Image src={logo} alt="Logo Cigale Construction" width={700} />
					</div>
				</section>
				<section className=" py-10 bg-[#0f0f0f] px-5 md:px-20 xl:px-40">
					<div className="my-6">
						<h1 className=" text-white font-bold uppercase text-center text-3xl">
							Projets réalisés
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center"></span>
					</div>

					<div className="flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap">
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4">
								Lorem Ipsum
							</h2>
							<Slider
								number="number1"
								slide1={slide1}
								slide2={slide2}
								slide3={slide3}
								slide4={slide4}
								slide5={slide5}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 md:text-reg md:leading-7">
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
								number="number2"
								slide1={slide3}
								slide2={slide4}
								slide3={slide1}
								slide4={slide2}
								slide5={slide5}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 md:text-reg md:leading-7">
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
								number="number3"
								slide1={slide2}
								slide5={slide5}
								slide2={slide3}
								slide3={slide4}
								slide4={slide1}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 md:text-reg md:leading-7">
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
								number="number4"
								slide1={slide1}
								slide2={slide2}
								slide3={slide3}
								// slide4={slide4}
								// slide4={slide4}
							/>
							<p className=" text-white font-reg text-sm mt-5 leading-6 md:text-reg md:leading-7">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</section>

				<section className=" bg-[#0f0f0f] px-5 flex flex-col gap-16 pt-5 pb-24  lg:flex-row lg:flex-wrap md:px-20 xl:px-40">
					<div className="h-[430px]  md:flex-1 ">
						<Image
							src={ratesIcon}
							alt="Témoignages clients"
							width={80}
							className="fill-white  mx-auto mb-3"
						/>
						<h1 className=" text-white font-bold uppercase text-center text-3xl">
							Témoignages clients
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center"></span>
						<SliderTxt />
					</div>
					<div className=" h-[430px] md:flex-1">
						<Image
							src={archiIcon}
							alt="Témoignages Architectes"
							width={80}
							className="fill-white  mx-auto mb-3"
						/>
						<h1 className=" text-white font-bold uppercase text-center text-3xl">
							Témoignages architectes
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center"></span>
						<SliderTxt2 />
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
