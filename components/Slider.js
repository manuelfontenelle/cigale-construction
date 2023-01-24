import React from "react"
import Image from "next/image"

const Slider = ({ slide1, slide2, slide3, slide4, slide5 }) => {
	return (
		<div
			id="carouselExampleIndicators"
			className="carousel slide relative"
			data-bs-ride="carousel"
		>
			<div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="1"
					aria-label="Slide 2"
				></button>
				<button
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide-to="2"
					aria-label="Slide 3"
				></button>
				{slide4 ? (
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="3"
						aria-label="Slide 4"
					></button>
				) : (
					""
				)}
				{slide5 ? (
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
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
				data-bs-target="#carouselExampleIndicators"
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
				data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next"
			>
				<span
					className="carousel-control-next-icon inline-block bg-no-repeat"
					aria-hidden="true"
				></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
		// <div id="default-carousel" className="relative" data-carousel="static">
		// 	<div className="relative h-[25rem] overflow-hidden rounded-lg md:h-[28rem]">
		// 		<div
		// 			className="hidden duration-200 ease-linear"
		// 			data-carousel-item="active"
		// 		>
		// 			<Image
		// 				className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
		// 				src={slide1}
		// 				alt="Wild Landscape"
		// 			/>
		// 		</div>

		// 		<div
		// 			className="hidden duration-200 ease-linear"
		// 			data-carousel-item="active"
		// 		>
		// 			<Image
		// 				className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
		// 				src={slide2}
		// 				alt="Wild Landscape"
		// 			/>
		// 		</div>

		// 		<div className="hidden duration-200 ease-linear" data-carousel-item>
		// 			<Image
		// 				className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
		// 				src={slide3}
		// 				alt="Wild Landscape"
		// 			/>
		// 		</div>

		// 		{slide4 ? (
		// 			<div className="hidden duration-200 ease-linear" data-carousel-item>
		// 				<Image
		// 					className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
		// 					src={slide4}
		// 					alt="Wild Landscape"
		// 				/>
		// 			</div>
		// 		) : (
		// 			""
		// 		)}

		// 		{slide5 ? (
		// 			<div className="hidden duration-200 ease-linear" data-carousel-item>
		// 				<Image
		// 					className="block w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
		// 					src={slide5}
		// 					alt="Wild Landscape"
		// 				/>
		// 			</div>
		// 		) : (
		// 			""
		// 		)}
		// 	</div>

		// 	{/* <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"> */}
		// 	<div className="absolute z-30 flex space-x-3 -translate-x-1/2 mt-4 left-1/2">
		// 		<button
		// 			type="button"
		// 			className="w-2 h-2 rounded-full"
		// 			aria-current="false"
		// 			aria-label="Slide 1"
		// 			data-carousel-slide-to="0"
		// 		></button>
		// 		<button
		// 			type="button"
		// 			className="w-2 h-2 rounded-full"
		// 			aria-current="false"
		// 			aria-label="Slide 2"
		// 			data-carousel-slide-to="1"
		// 		></button>
		// 		<button
		// 			type="button"
		// 			className="w-2 h-2 rounded-full"
		// 			aria-current="false"
		// 			aria-label="Slide 3"
		// 			data-carousel-slide-to="2"
		// 		></button>
		// 		{slide4 ? (
		// 			<button
		// 				type="button"
		// 				className="w-2 h-2 rounded-full"
		// 				aria-current="false"
		// 				aria-label="Slide 4"
		// 				data-carousel-slide-to="3"
		// 			></button>
		// 		) : (
		// 			""
		// 		)}

		// 		{slide5 ? (
		// 			<button
		// 				type="button"
		// 				className="w-2 h-2 rounded-full"
		// 				aria-current="false"
		// 				aria-label="Slide 5"
		// 				data-carousel-slide-to="4"
		// 			></button>
		// 		) : (
		// 			""
		// 		)}
		// 	</div>

		// 	<button
		// 		type="button"
		// 		className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
		// 		data-carousel-prev
		// 	>
		// 		<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
		// 			<svg
		// 				aria-hidden="true"
		// 				className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
		// 				fill="none"
		// 				stroke="currentColor"
		// 				viewBox="0 0 24 24"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 			>
		// 				<path
		// 					stroke-linecap="round"
		// 					stroke-linejoin="round"
		// 					stroke-width="2"
		// 					d="M15 19l-7-7 7-7"
		// 				></path>
		// 			</svg>
		// 			<span className="sr-only">Previous</span>
		// 		</span>
		// 	</button>
		// 	<button
		// 		type="button"
		// 		className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
		// 		data-carousel-next
		// 	>
		// 		<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
		// 			<svg
		// 				aria-hidden="true"
		// 				className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
		// 				fill="none"
		// 				stroke="currentColor"
		// 				viewBox="0 0 24 24"
		// 				xmlns="http://www.w3.org/2000/svg"
		// 			>
		// 				<path
		// 					stroke-linecap="round"
		// 					stroke-linejoin="round"
		// 					stroke-width="2"
		// 					d="M9 5l7 7-7 7"
		// 				></path>
		// 			</svg>
		// 			<span className="sr-only">Next</span>
		// 		</span>
		// 	</button>
		// </div>
	)
}

export default Slider
