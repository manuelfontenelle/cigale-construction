import React from "react"

const Footer = () => {
	// useEffect(() => {
	const getYear = () => {
		return new Date().getFullYear()
	}
	// }, [])

	return (
		<div className=" flex justify-center items-center w-full bottom-0 h-10 bg-white">
			<div className=" text-xs uppercase   py-1 font-semibold">
				&copy; copyright {getYear()} - Cigale Construction
			</div>
		</div>
	)
}

export default Footer
