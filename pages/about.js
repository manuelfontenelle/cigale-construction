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
			<main className="min-h-screen bg-[#0f0f0f]">
				<section className="  pt-20">
					<div className="h-96">
						<Image
							className=" block w-full object-cover h-[100%]"
							src={slide1}
							alt="Cigale Construction"
						/>
					</div>
				</section>
				<section className="py-10 bg-[#0f0f0f] px-5 md:px-20 xl:px-40">
					<div className="my-6">
						<h1 className="  font-bold uppercase  text-[#c3a079] text-3xl">
							Cigale Construction
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block text-center"></span>
						<p className=" text-white font-reg text-sm mt-5 leading-6 md:text-reg md:leading-7">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled
							it to make a and scrambled it to make a type specimen book. and
							scrambled it to make a type specimen book. and scrambled it to
							make a type specimen book. type specimen book. and scrambled it to
							make a type specimen book. and scrambled it to make a type
							specimen book. Lorem Ipsum is simply dummy text of the printing
							and typesetting industry. Lorem Ipsum has been the industry's
							standard dummy text ever since the 1500s, when an unknown printer
							took a galley of type and scrambled it to make a type specimen
							book. Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a and scrambled it to make
							a type specimen book. and scrambled it to make a type specimen
							book. and scrambled it to make a type specimen book. type specimen
							book. and scrambled it to make a type specimen book. and scrambled
							it to make a type specimen book.
						</p>
					</div>
				</section>
				<section className="pb-20 px-5 md:px-20 xl:px-40">
					<div className="flex flex-col gap-10  xl:flex-row xl:items-end">
						<Image
							className=" block w-full object-cover  sm:h-[350px] xl:basis-1/4 xl:h-[300px] xl:w-full"
							src={slide1}
							alt="Kevin allegre"
						/>
						<div className="flex-1 xl:pr-40">
							<h2 className="text-white text-3xl font-bold">Kévin Allegre</h2>
							<p className=" text-white font-reg text-sm mt-5 leading-6 md:text-reg md:leading-7 ">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. Lorem
								Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a and scrambled it to make a
								type specimen book. and scrambled it to make a type specimen
								book. and scrambled it to make a type specimen book. type
								specimen book. and scrambled it to make a type specimen book.
								and scrambled it to make a type specimen book. Lorem Ipsum is
								simply dummy text of the printing and typesetting industry.
							</p>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default about
