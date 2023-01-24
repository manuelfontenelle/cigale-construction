import React from "react"

import Image from "next/image"

const Slider = ({ slide1, slide2, slide3, slide4, slide5 }) => {
	return (
		<div id="indicators-carousel" className="relative" data-carousel="static">
			<div className="relative h-[25rem] overflow-hidden rounded-lg md:h-[28rem]">
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item="active"
				>
					<Image
						className="block w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
						src={slide1}
						alt="Wild Landscape"
					/>
				</div>

				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<Image
						className="block w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
						src={slide2}
						alt="Wild Landscape"
					/>
				</div>

				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<Image
						className="block w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
						src={slide3}
						alt="Wild Landscape"
					/>
				</div>
				<div className="hidden duration-700 ease-in-out" data-carousel-item>
					<Image
						className="block w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
						src={slide4}
						alt="Wild Landscape"
					/>
				</div>

				{slide5 ? (
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<Image
							className="block w-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover h-[100%]"
							src={slide5}
							alt="Wild Landscape"
						/>
					</div>
				) : (
					""
				)}
			</div>

			{/* <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2"> */}
			<div className="absolute z-30 flex space-x-3 -translate-x-1/2 mt-4 left-1/2">
				<button
					type="button"
					className="w-2 h-2 rounded-full"
					aria-current="false"
					aria-label="Slide 1"
					data-carousel-slide-to="0"
				></button>
				<button
					type="button"
					className="w-2 h-2 rounded-full"
					aria-current="false"
					aria-label="Slide 2"
					data-carousel-slide-to="1"
				></button>
				<button
					type="button"
					className="w-2 h-2 rounded-full"
					aria-current="false"
					aria-label="Slide 3"
					data-carousel-slide-to="2"
				></button>
				<button
					type="button"
					className="w-2 h-2 rounded-full"
					aria-current="false"
					aria-label="Slide 4"
					data-carousel-slide-to="3"
				></button>
				{slide5 ? (
					<button
						type="button"
						className="w-2 h-2 rounded-full"
						aria-current="false"
						aria-label="Slide 5"
						data-carousel-slide-to="4"
					></button>
				) : (
					""
				)}
			</div>

			<button
				type="button"
				className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-prev
			>
				<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-next
			>
				<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-2 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						aria-hidden="true"
						className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	)
}

export default Slider
