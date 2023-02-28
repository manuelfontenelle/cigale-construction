import React from "react"

const Footer = () => {
	// useEffect(() => {
	const getYear = () => {
		return new Date().getFullYear()
	}
	// }, [])

	return (
		<div className=" flex justify-center items-center w-full bottom-0 h-12 bg-black">
			<div className="  text-xs uppercase  py-1 font-light text-white">
				&copy; copyright {getYear()} - Cigale Construction
			</div>
		</div>
	)
}

export default Footer
