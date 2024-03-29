// rafce == >  type for create react app snipper
// import React from "react"
import { useEffect } from "react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Formulaire from "../components/Formulaire"
import Image from "next/image"
import slide1 from "../public/page_estimation.jpg"
import illu from "../public/illu.svg"

const contact = () => {
	return (
		<div>
			<Head>
				<title>Cigale Construction - Estimation</title>
				<meta
					name="description"
					content="Estimation de votre besoin en rénovation/construction"
				/>
				<link rel="icon" href="/favicon.png" />
				<meta
					property="og:title"
					content="Estimation de votre besoin en rénovation/construction"
				/>
				<meta
					property="og:description "
					content="Cigale Construction - Estimation"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.cigaleconstruction.ca" />
				<meta
					property="og:image"
					content="https://www.cigaleconstruction.ca/og-background.jpg"
				/>
				<meta property="og:site_name" content="Cigale Construction" />
			</Head>
			<NavBar />
			<main className="min-h-screen bg-[#0f0f0f]">
				<section className="  pt-20">
					<div className="md:h-[31rem]">
						<Image
							className=" block w-full object-cover h-[100%] object-bottom "
							src={slide1}
							alt="Cigale Construction"
						/>
					</div>
				</section>
				<section className="py-10 bg-[#0f0f0f] px-5 md:px-10 2xl:px-40">
					<div className="my-6">
						<h1 className="  font-bold uppercase  text-[#c3a079]  text-2xl 2xl:text-3xl">
							Estimation
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block text-center"></span>
					</div>
					<div className="flex flex-col gap-10  xl:flex-row xl:items-start">
						<div className=" block w-full object-cover  xl:w-[50%] ">
							<p className=" text-white font-reg text-sm my-4 leading-6 2xl:text-base md:leading-7 2xl:pr-60">
								Afin de mieux vous servir, aidez-nous à vous aiguillez vers le
								bon représentant en répondant aux questions suivantes :
							</p>
							<Formulaire />
						</div>
						<div className="flex-1 xl:w-full xl:mt-[-50px]">
							<Image className="w-full" src={illu} alt="Kevin allegre" />
						</div>
					</div>
				</section>
				<section className="pb-20 px-5 md:px-20 xl:px-40"></section>
			</main>
			<Footer />
		</div>
	)
}

export default contact
