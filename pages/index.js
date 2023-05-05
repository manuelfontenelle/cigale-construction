import Head from "next/head"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Slider from "../components/Slider"
import SliderTxt from "../components/SliderTxt"

import { useEffect } from "react"

import Image from "next/image"
import logo from "../public/logo.png"

import Projet1slide1 from "../public/projets/transformation/Transformation-1.jpg"
import Projet1slide2 from "../public/projets/transformation/Transformation-2.jpg"
import Projet1slide3 from "../public/projets/transformation/Transformation-3.jpg"
import Projet1slide4 from "../public/projets/transformation/Transformation-4.jpg"
import Projet1slide5 from "../public/projets/transformation/Transformation-5.jpg"
import Projet1slide6 from "../public/projets/transformation/Transformation-6.jpg"
import Projet1slide7 from "../public/projets/transformation/Transformation-7.jpg"
import Projet1slide8 from "../public/projets/transformation/Transformation-8.jpg"
import Projet1slide9 from "../public/projets/transformation/Transformation-9.jpg"
import Projet1slide10 from "../public/projets/transformation/Transformation-10.jpg"
import Projet1slide11 from "../public/projets/transformation/Transformation-11.jpg"
import Projet1slide12 from "../public/projets/transformation/Transformation-12.jpg"

import Projet2slide1 from "../public/projets/renovation/Renovation-1.jpg"
import Projet2slide2 from "../public/projets/renovation/Renovation-2.jpg"
import Projet2slide3 from "../public/projets/renovation/Renovation-3.jpg"
import Projet2slide4 from "../public/projets/renovation/Renovation-4.jpg"
import Projet2slide5 from "../public/projets/renovation/Renovation-5.jpg"
import Projet2slide6 from "../public/projets/renovation/Renovation-6.jpg"
import Projet2slide7 from "../public/projets/renovation/Renovation-7.jpg"
import Projet2slide8 from "../public/projets/renovation/Renovation-8.jpg"
import Projet2slide9 from "../public/projets/renovation/Renovation-9.jpg"
import Projet2slide10 from "../public/projets/renovation/Renovation-10.jpg"

import Projet3slide1 from "../public/projets/agrandissement/Agrandissement-1.jpg"
import Projet3slide2 from "../public/projets/agrandissement/Agrandissement-2.jpg"
import Projet3slide3 from "../public/projets/agrandissement/Agrandissement-3.jpg"
import Projet3slide4 from "../public/projets/agrandissement/Agrandissement-4.jpg"
import Projet3slide5 from "../public/projets/agrandissement/Agrandissement-5.jpg"
import Projet3slide6 from "../public/projets/agrandissement/Agrandissement-6.jpg"

import Projet4slide1 from "../public/projets/commercial/Commercial-1.jpg"
import Projet4slide2 from "../public/projets/commercial/Commercial-2.jpg"
import Projet4slide3 from "../public/projets/commercial/Commercial-3.jpg"
import Projet4slide4 from "../public/projets/commercial/Commercial-4.jpg"
import Projet4slide5 from "../public/projets/commercial/Commercial-5.jpg"

import ratesIcon from "../public/rates-icon.svg"
import certif1 from "../public/certifications/Apchq.png"
import certif2 from "../public/certifications/Architecte-sans-frontière.png"
import certif3 from "../public/certifications/Novo-climat.svg"

export default function Home() {
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
				<meta
					name="description"
					content="Cigale Construction - Entrepreneur Général spécialisé dans la réalisation de projets Architecturaux. Nous œuvrons dans l'aire du grand Montréal."
				/>
				<link rel="icon" href="/favicon.png" />
				<meta property="og:title" content="Cigale Construction" />
				<meta
					property="og:description "
					content="Cigale Construction - Entrepreneur Général spécialisé dans la réalisation de projets Architecturaux. Nous œuvrons dans l'aire du grand Montréal."
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
			<main>
				<section className="min-h-screen w-full h-full overflow-hidden bg-intro-bg bg-cover bg-no-repeat bg-left md:bg-[center]">
					<div className="flex justify-center items-center min-h-screen px-8">
						<Image src={logo} alt="Logo Cigale Construction" width={700} />
					</div>
				</section>
				<section className=" py-10 bg-[#0f0f0f] px-5 md:px-10 2xl:px-40">
					<div className="my-6">
						<h1 className=" text-white font-bold uppercase text-center text-3xl">
							réalisations
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center"></span>
					</div>

					<div className="flex flex-col  gap-10 2xl:gap-20 py-10 lg:flex-row lg:flex-wrap">
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4 uppercase">
								Transformation
							</h2>
							<Slider
								number="number1"
								slide1={Projet1slide1}
								slide2={Projet1slide2}
								slide3={Projet1slide3}
								slide4={Projet1slide4}
								slide5={Projet1slide5}
								slide6={Projet1slide6}
								slide7={Projet1slide7}
								slide8={Projet1slide8}
								slide9={Projet1slide9}
								slide10={Projet1slide10}
								slide11={Projet1slide11}
								slide12={Projet1slide12}
							/>
							<p className=" text-white font-light  text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								Vous êtes propriétaire d'un bien et souhaitez le transformer ?
								Que ce soit une unification en maison unifamiliale, une
								transformation de commerces en Condos… Toute l'équipe de Cigale
								construction mènera votre projet à terme avec professionnalisme,
								efficacité et sérénité.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4 uppercase">
								Rénovation majeure
							</h2>
							<Slider
								number="number2"
								slide1={Projet2slide1}
								slide2={Projet2slide2}
								slide3={Projet2slide3}
								slide4={Projet2slide4}
								slide5={Projet2slide5}
								slide6={Projet2slide6}
								slide7={Projet2slide7}
								slide8={Projet2slide8}
								slide9={Projet2slide9}
								slide10={Projet2slide10}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								Le temps passe et laisse ses traces… La famille s'agrandit et
								les espaces doivent être repensés. Votre intérieur abrite chaque
								étape de votre vie et doit s'y adapter. Nous sommes là pour le
								faire évoluer selon vos besoins
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4 uppercase">
								Agrandissement
							</h2>
							<Slider
								number="number3"
								slide1={Projet3slide1}
								slide2={Projet3slide2}
								slide3={Projet3slide3}
								slide4={Projet3slide4}
								slide5={Projet3slide5}
								slide6={Projet3slide6}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								L'agrandissement de maison consiste à augmenter la surface
								habitable de votre bien. Qu'il s'agisse d'ajouter un étage,
								d'excaver votre sous-sol ou simplement d'allonger votre bien,
								Cigale Construction détient l'expertise pour vous livrer votre
								projet clé en main.
							</p>
						</div>
						<div className="basis-1/3 flex-1">
							<h2 className=" text-[#c3a079] font-semibold text-2xl mb-4 uppercase">
								Commercial
							</h2>
							<Slider
								number="number4"
								slide1={Projet4slide1}
								slide2={Projet4slide2}
								slide3={Projet4slide3}
								slide4={Projet4slide4}
								slide5={Projet4slide5}
							/>
							<p className=" text-white font-reg text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								Vous voulez rénover vos appartements locatifs ? Votre restaurant
								ou vos bureaux ? Nous savons être compétitif tout en apportant
								des matériaux de qualités pour vos projets.
							</p>
						</div>
					</div>
				</section>

				<section className=" bg-[#0f0f0f] px-5 gap-10 2xl:gap-20 pt-5 pb-16 md:px-10 2xl:px-40">
					<div className=" md:h-[390px]  md:flex-1  ">
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
					{/* <div className=" h-[400px] 2xl:h-[470px] md:flex-1">
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
					</div> */}
				</section>

				<section className=" bg-[#0f0f0f] px-5 flex flex-col gap-10 2xl:gap-10 pt-5 pb-20   md:px-10 2xl:px-40">
					<div className="md:flex-1 mb-5">
						<h1 className=" text-white font-bold uppercase text-center text-3xl">
							Certifications
						</h1>
						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center"></span>
					</div>
					<div className="flex flex-col gap-14 lg:flex-row  items-center">
						<Image
							src={certif1}
							alt="Apchq"
							width={100}
							className="  mx-auto w-[150px] md:w-[220px]"
						/>
						<Image
							src={certif2}
							alt="Apchq"
							width={100}
							className="  mx-auto  w-[220px] md:w-[250px] "
						/>
						<Image
							src={certif3}
							alt="Apchq"
							width={100}
							className="  mx-auto  w-[160px] md:w-[200px]"
						/>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}
