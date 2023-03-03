import React from "react"

const SliderTxt = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide relative w-full xl:w-[88%] mx-auto"
			data-bs-ride="carousel"
			data-bs-interval="false"
		>
			<div className="carousel-inner relative w-full my-5  overflow-hidden ">
				<div className="carousel-item active relative float-left w-full ">
					<div className=" w-full text-white px-16 flex flex-col justify-center items-center sm:px-20 ">
						<span className="pb-2 text-md">Derek et Hugo</span>
						<p className="leading-5 text-xs  2xl:text-sm 2xl:leading-6  text-justify">
							C'était un plaisir absolu de travailler avec Kevin et toute
							l'équipe de Cigale Construction. Nous entreprenions notre première
							grande démolition et reconstruction, passant d'un duplex à une
							maison unifamiliale, et Kevin et son équipe d'experts et de
							sous-traitants ont été là pour nous à chaque étape du processus.
							Ses réponses rapides, son professionnalisme, ses entrepreneurs
							modernes et de qualité, son souci du détail et son approche
							amicale sont autant de raisons pour lesquelles je le
							recommanderais à quiconque et je serais heureux de m'associer à
							lui pour un futur projet. Merci Kevin !
						</p>
					</div>
				</div>
				<div className="carousel-item relative float-left w-full">
					<div className=" w-full text-white px-16 flex flex-col justify-center items-center sm:px-28">
						<span className="pb-2 text-md">John Doe 2</span>
						<p className="leading-5 text-xs text-justify 2xl:text-sm 2xl:leading-6">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book Lorem Ipsum has
							been the industry's standard dummy text ever since the 1500s,
						</p>
					</div>
				</div>
			</div>
			<button
				className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev"
			>
				<span
					className="carousel-control-prev-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	)
}

export default SliderTxt
