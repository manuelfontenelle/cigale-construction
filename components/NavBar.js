// rafce == >  type for create react app snipper
import useScrollPosition from "../hooks/useScrollPosition"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import logo from "../public/logo.png"

const NavBar = () => {
	// detection page active pour Style Nav
	const router = useRouter()
	const currentRoute = router.pathname
	//
	const scrollPosition = useScrollPosition()
	// console.log(scrollPosition)

	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div
			className={`fixed w-full h-20  z-[100]  ease-in duration-300 ${
				currentRoute === "/" && scrollPosition === 0 ? "" : "bg-white shadow-xl"
			}`}
			id="navbar"
		>
			<div
				className={`flex  items-center w-full h-full px-5 md:px-10 2xl:px-40 ${
					currentRoute === "/" && scrollPosition === 0
						? "justify-end"
						: "justify-between"
				}`}
			>
				{currentRoute === "/" && scrollPosition === 0 ? (
					""
				) : (
					<Link href="/">
						<Image
							src={logo}
							width="130"
							alt="Logo Cigale Construction"
						></Image>
					</Link>
				)}

				<div>
					<ul className="hidden font-bold text-[#0f0f0f] md:flex">
						<Link
							href="/"
							className={currentRoute === "/" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Accueil
							</li>
						</Link>
						<Link
							href="/about"
							className={currentRoute === "/about" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Nous
							</li>
						</Link>
						<Link
							href="/contact"
							className={currentRoute === "/contact" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Estimation
							</li>
						</Link>
						<Link
							href="/career"
							className={currentRoute === "/career" ? "active" : "nonActive"}
						>
							<li className="ml-10 text-sm uppercase borderBottomCustom">
								Carrière
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden cursor-pointer">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
			>
				<div
					className={
						nav
							? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-300"
							: "fixed left-[-100%] top-0 p-10 ease-in duration-300"
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image src={logo} width="125" alt="/"></Image>
							</Link>
							<div onClick={handleNav} className=" p-3 cursor-pointer">
								<AiOutlineClose size={20} />
							</div>
						</div>
						{/* <div className="border-b border-gray-300 my-4">
							<p className="w-[85%] md:w-[90%] py-4">
								Let's build something legendary together
							</p>
						</div> */}
					</div>
					<div className="py-4  flex-col">
						<ul className="uppercase font-bold">
							<Link href="/">
								<li className="py-4 text-sm">Accueil</li>
							</Link>
							<Link href="/about">
								<li className="py-4 text-sm">Nous</li>
							</Link>
							<Link href="/contact">
								<li className="py-4 text-sm">Estimation</li>
							</Link>
							<Link href="/career">
								<li className="py-4 text-sm">Carrière</li>
							</Link>
						</ul>
						{/* <div className="pt-40">
							<p className="uppercase tracking-widest text-blue-600">
								Let's Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<FaGithub />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<AiOutlineMail />
								</div>
								<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
