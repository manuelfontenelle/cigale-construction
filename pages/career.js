// rafce == >  type for create react app snipper
// import React from "react"
import { useEffect } from "react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Formulaire2 from "../components/Formulaire2"
import Image from "next/image"
import slide1 from "../public/page_carrière.jpg"
import contactImg from "../public/contact.svg"

const career = () => {
	// useEffect(() => {
	// 	const use = async () => {
	// 		;(await import("tw-elements")).default
	// 	}
	// 	use()
	// }, [])

	return (
		<div>
			<Head>
				<title>Cigale Construction - Carrière</title>
				<meta name="description" content="Cigale Construction - Carrière" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<main className="min-h-screen bg-[#0f0f0f]">
				<section className="  pt-20">
					<div className="md:h-[31rem]">
						<Image
							className=" block w-full object-cover h-[100%]"
							src={slide1}
							alt="Cigale Construction"
						/>
					</div>
				</section>
				<section className="py-10 bg-[#0f0f0f] px-5 md:px-10 2xl:px-40">
					<div className="my-6">
						<h1 className="  font-bold uppercase  text-[#c3a079] text-2xl 2xl:text-3xl">
							Candidature Spontannée
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block text-center"></span>
					</div>
					<div className="flex flex-col gap-10  xl:flex-row xl:items-start ">
						<div className=" block w-full object-cover  xl:w-[50%] ">
							<p className=" text-white font-reg text-sm my-4 leading-6 2xl:text-base 2xl:leading-7 2xl:pr-60">
								Vous souhaitez nous rejoindre ? Veuillez remplir ce formulaire
								et nous vous contacterons prochainement :
							</p>
							<Formulaire2 />
						</div>
						<div className="flex-1 xl:w-full xl:mt-[-50px]">
							<Image className="w-full" src={contactImg} alt="Illustration " />
						</div>
					</div>
				</section>
				<section className="pb-20 px-5 md:px-20 xl:px-40"></section>
			</main>
			<Footer />
		</div>
	)
}

export default career
