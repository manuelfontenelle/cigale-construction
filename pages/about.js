// rafce == >  type for create react app snipper
// import React from "react"
import Head from "next/head"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Image from "next/image"
import slide1 from "../public/page_quisommesnous.jpg"
import photoProfil from "../public/kevin-allegre_portrait.jpg"

const about = () => {
	return (
		<div>
			<Head>
				<title>Cigale Construction - Qui sommes-nous ?</title>
				<meta
					name="description"
					content="Cigale Construction - Qui sommes-nous ?"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<main className="min-h-screen bg-[#0f0f0f]">
				<section className="  pt-20">
					<div className="md:h-[31rem]">
						<Image
							className=" block w-full object-cover h-[100%] "
							src={slide1}
							alt="Cigale Construction"
						/>
					</div>
				</section>
				<section className="py-10 bg-[#0f0f0f] px-5 md:px-10 2xl:px-40">
					<div className="my-6">
						<h1 className=" text-center font-bold uppercase  text-[#c3a079]  text-2xl 2xl:text-3xl">
							Cigale Construction
						</h1>

						<span className=" w-32 h-0.5 mt-2.5 bg-[#c3a079] block mx-auto text-center mb-16"></span>
						<p className=" text-white font-reg text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7">
							<span className="block italic font-bold  text-lg 2xl:text-xl ">
								EXPÉRIENCE MATURE, DES COMPÉTENCES AVANCÉES, DES COLLABORATIONS
								DISTINGUÉES, UN RÉSEAU SOLIDE, DES VALEURS RECONNUES, UNE ÉQUIPE
								BIENHEUREUSE ET DYNAMIQUE
							</span>
							<span className="block mt-1 ">
								Entrepreneur Général spécialisé dans la réalisation de projets
								Architecturaux.
								<br />
								Nous œuvrons dans l’aire du grand Montréal.
							</span>
							<span className="block mt-10 font-bold text-lg text-[#c3a079]">
								NOTRE MISSION
							</span>
							<span className=" w-16 h-0.5 mt-1.5 mb-3 bg-[#c3a079] block "></span>
							Est de réaliser vos travaux en étant à l’écoute de vos besoins, de
							vos attentes et de vos objectifs.
							<br />
							En respectant ceux-ci, notre posture sera de challenger votre
							projet nourri de vos idées, de nos compétences et de notre
							savoir-faire.
							<span className="block mt-10 font-bold text-lg text-[#c3a079]">
								CONFIEZ NOUS VOS CLEFS
							</span>
							<span className=" w-16 h-0.5 mt-1.5 mb-3 bg-[#c3a079] block text-center"></span>
							Notre ADN est guidé par la maîtrise de la performance. <br /> Fort
							d’une équipe regroupant des talents, CIGALE CONSTRUCTION se donne
							le devoir de livrer votre projet dans le respect des coûts de
							construction, des échéanciers et de la qualité de l’ouvrage.
							<br /> CIGALE CONSTRUCTION se distingue par ses connaissances, son
							savoir-faire, son service d’accompagnement, la qualité de ses
							réalisations pour l’entière satisfaction de nos clients.
						</p>
					</div>
				</section>
				<section className="pb-20 px-5 mt-10 md:px-10 2xl:px-40">
					<div className="flex flex-col gap-12  sm:flex-row md:items-end">
						<div className=" sm:w-[40%] lg:w-[30%] xl:w-[25%]">
							<Image
								className=" block w-full object-cover sm:h-[auto] xl:basis-1/4 xl:h-[auto] xl:w-full"
								src={photoProfil}
								alt="Kevin allegre"
							/>
						</div>

						<div className="flex-1">
							<h2 className="text-[#c3a079] text-3xl font-bold ">
								Kévin Allegre
							</h2>
							<p className=" text-white font-reg text-sm mt-5 leading-6 2xl:text-base 2xl:leading-7 ">
								<span className="font-bold">
									Diplômé de l’école d’ingénieur du CESI, Kévin cumule plus de
									10 ans d’expérience dans la gestion de projet.
								</span>
								<br />
								<br />
								Sa volonté naturelle de vouloir toujours se dépasser et relever
								des défis, l’a conduit inévitablement à créer sa propre société.
								<br />
								De son expérience antérieure et de son esprit cartésien, il
								transmet sa rigueur et sa méthodologie à ses équipes dans le but
								d’une amélioration continue. <br />
								<br />
								Personne au grand cœur, Kévin a participé à deux missions
								humanitaires à l’étranger visant à améliorer l’habitat. <br />
								Il a souhaité continuer son engagement à travers Cigale
								Construction qui est fièrement partenaire d’Architecte Sans
								Frontière Québec.
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
