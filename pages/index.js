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
import Projet2slide1 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/001.jpg"
import Projet2slide2 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/002.jpg"
import Projet2slide3 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/003.jpg"
import Projet2slide4 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/004.jpg"
import Projet2slide5 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/005.jpg"
import Projet2slide6 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/006.jpg"
import Projet2slide7 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/007.jpg"
import Projet2slide8 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/008.jpg"
import Projet2slide9 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/009.jpg"
import Projet2slide10 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/010.jpg"
import Projet2slide11 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/011.jpg"
import Projet2slide12 from "../public/projets/Rénovation-haut-de-gamme-ville-mont-royal/012.jpg"

import Projet3slide1 from "../public/projets/Rénovation-appartement-locatif/001.jpg"
import Projet3slide2 from "../public/projets/Rénovation-appartement-locatif/002.jpg"
import Projet3slide3 from "../public/projets/Rénovation-appartement-locatif/003.jpg"
import Projet3slide4 from "../public/projets/Rénovation-appartement-locatif/004.jpg"
import Projet3slide5 from "../public/projets/Rénovation-appartement-locatif/005.jpg"
import Projet3slide6 from "../public/projets/Rénovation-appartement-locatif/006.jpg"
import Projet3slide7 from "../public/projets/Rénovation-appartement-locatif/007.jpg"

import Projet4slide1 from "../public/projets/Travaux-structuraux/001.jpg"
import Projet4slide2 from "../public/projets/Travaux-structuraux/002.jpg"
import Projet4slide3 from "../public/projets/Travaux-structuraux/003.jpg"
import Projet4slide4 from "../public/projets/Travaux-structuraux/004.jpg"
import Projet4slide5 from "../public/projets/Travaux-structuraux/005.jpg"
import Projet4slide6 from "../public/projets/Travaux-structuraux/006.jpg"

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
								slide1={slide1}
								slide2={slide2}
								slide3={slide3}
								slide4={slide4}
								slide5={slide5}
							/>
							<p className=" text-white font-light  text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								Vous êtes propriétaire d’un bien et souhaitez le transformer ?
								Que ce soit une unification en maison unifamiliale, une
								transformation de commerces en Condos… Toute l’équipe de Cigale
								construction mènera votre projet à therme avec
								professionnalisme, efficacité et sérénité.
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
								slide11={Projet2slide11}
								slide12={Projet2slide12}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								Le temps passe et laisse ses traces… La famille s’agrandit et
								les espaces doivent être repensés. Votre intérieur abrite chaque
								étape de votre vie et doit s’y adapter. Nous sommes là pour le
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
								slide7={Projet3slide7}
							/>
							<p className=" text-white font-light text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								L’agrandissement de maison consiste à augmenter la surface
								habitable de votre bien. Qu’il s’agisse d’ajouter un étage,
								d’excaver votre sous-sol ou simplement d’allonger votre bien,
								Cigale Construction détient l’expertise pour vous livrer votre
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
								slide6={Projet4slide6}
							/>
							<p className=" text-white font-reg text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
								Vous voulez rénover vos appartements locatifs ? Votre restaurant
								ou vos bureaux ? Nous savons être compétitif tout en apportant
								des matériaux de qualités pour vos projets.
							</p>
						</div>
					</div>
				</section>

				<section className=" bg-[#0f0f0f] px-5 flex flex-col gap-10 2xl:gap-20 pt-5 pb-12  lg:flex-row lg:flex-wrap md:px-10 2xl:px-40">
					<div className=" 2xl:h-[470px]  md:flex-1 ">
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
					<div className=" h-[400px] 2xl:h-[470px] md:flex-1">
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
