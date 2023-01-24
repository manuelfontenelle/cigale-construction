import React from "react"
import Image from "next/image"

const Slider = ({ slide1, slide2, slide3, slide4, slide5 }) => {
	return (
		<div
			id="carouselExampleIndicators2"
			className="carousel slide relative"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators2"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators2"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators2"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				{slide4 ? (
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators2"
						data-bs-slide-to="3"
						aria-label="Slide 4"
					></button>
				) : (
					""
				)}
				{slide5 ? (
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators2"
						data-bs-slide-to="4"
						aria-label="Slide 5"
					></button>
				) : (
					""
				)}
			</div>
			<div className="carousel-inner relative w-full overflow-hidden h-[28rem]">
				<div className="carousel-item active float-left w-full h-full">
					<Image
						className=" block w-full object-cover h-[100%]"
						src={slide1}
						alt="Wild Landscape"
					/>
				</div>
				<div className="carousel-item float-left w-full h-full">
					<Image
						className="block w-full object-cover h-[100%]"
						src={slide2}
						alt="Wild Landscape"
					/>
				</div>
				<div className="carousel-item float-left w-full h-full">
					<Image
						className=" block w-full  object-cover h-[100%]"
						src={slide3}
						alt="Wild Landscape"
					/>
				</div>
				{slide4 ? (
					<div className="carousel-item float-left w-full h-full">
						<Image
							className=" block w-full  object-cover h-[100%]"
							src={slide4}
							alt="Wild Landscape"
						/>
					</div>
				) : (
					""
				)}
				{slide5 ? (
					<div className="carousel-item float-left w-full h-full">
						<Image
							className=" block w-full  object-cover h-[100%]"
							src={slide5}
							alt="Wild Landscape"
						/>
					</div>
				) : (
					""
				)}
			</div>
			<button
				className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
				type="button"
				data-bs-target="#carouselExampleIndicators2"
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
				data-bs-target="#carouselExampleIndicators2"
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

export default Slider
