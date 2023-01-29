// rafce == >  type for create react app snipper
// import React from "react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from "next/image"
import slide1 from "../public/slide1.jpg"

const about = () => {
	return (
		<div>
			<Head>
				<title>Cigale Construction - Qui sommes-nous ?</title>
				<meta
					name="description"
					content="Cigale Construction - Qui sommes-nous ?"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<section className="min-h-screen bg-[#0f0f0f] pt-20">
				<div className="h-96">
					<Image
						className=" block w-full object-cover h-[100%]"
						src={slide1}
						alt="Cigale Construction"
					/>
				</div>
			</section>
			<section className=" py-10 bg-[#0f0f0f] px-5 md:px-20 xl:px-40">
				<div className="my-6">
					<h1 className=" text-white font-bold uppercase text-center text-3xl">
						Projets réalisés
					</h1>
					<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center"></span>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default about
