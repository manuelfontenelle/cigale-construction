import React from "react"
import axios from "axios"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"

const Formulaire = () => {
	const [prenom, setPrenom] = useState("")
	const [nom, setNom] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [selectedFile, setSelectedFile] = useState(null)

	// console.log(selectedFile)

	// custom js

	// Fin custom js
	const handleFileChange = (event) => {
		// console.log(event.target.files[0].size)
		// limite poids 25mo
		if (event.target.files[0].size < 24000000) {
			setSelectedFile(event.target.files[0])
			const alertMaxsize = document.querySelector("#alertMaxsize")
			alertMaxsize.classList.add("hidden")
			alertMaxsize.classList.remove("block")
			// console.log("OKKKKK")
		} else {
			// console.log("NOT OKKKKK")
			// alert("Veuillez utiliser un fichier de moins de 25Mo")
			const alertMaxsize = document.querySelector("#alertMaxsize")
			alertMaxsize.classList.add("block")
			alertMaxsize.classList.remove("hidden")

			event.target.files[0] === null
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData()

		// const data = {
		// 	prenom: prenom,
		// 	nom: nom,
		// 	phone: phone,
		// 	email: email,
		// 	message: message,
		// }
		formData.append("prenom", prenom)
		formData.append("nom", nom)
		formData.append("phone", phone)
		formData.append("email", email)
		formData.append("message", message)
		formData.append("selectedFile", selectedFile)

		const form = document.querySelector("#contact-form")
		const submitButton = document.querySelector("#submit-btn")
		const loader = document.querySelector("#loader")

		// Fonction pour vider les champs du formulaire :
		const cleanForm = () => {
			form.reset()
		}

		// Fonction pour réactiver le bouton d'envoi du formulaire :
		const isEnabled = () => {
			submitButton.removeAttribute("disabled")
			submitButton.classList.remove("disabled-btn")
			loader.classList.add("hidden")
			loader.classList.remove("block")
		}

		// Fonction pour désactiver le bouton d'envoi du formulaire :
		const isDisabled = () => {
			submitButton.setAttribute("disabled", "disabled")
			submitButton.classList.add("disabled-btn")
			loader.classList.remove("hidden")
			loader.classList.add("block")
		}

		isDisabled()

		if (selectedFile !== null) {
			try {
				// const response = await axios.post(
				// 	"http://localhost:5000/form-career_attachment",
				// 	formData
				// )
				const response = await axios.post(
					"https://nodemailer-cigale-construction.herokuapp.com/form-career_attachment",
					formData
				)

				if (response.status === 200) {
					alert("Votre formulaire a bien été envoyé")
					cleanForm()
					isEnabled()
				}
			} catch (e) {
				if (e.response.data.error === "Missing parameters") {
					alert("Veuillez remplir tous les champs du formulaire")
				} else {
					alert("Une erreur est survenue")
					cleanForm()
				}

				isEnabled()
			}
		} else {
			try {
				// const response = await axios.post(
				// 	"http://localhost:5000/form-career",
				// 	formData
				// )
				const response = await axios.post(
					"https://nodemailer-cigale-construction.herokuapp.com/form-career",
					formData
				)

				if (response.status === 200) {
					alert("Votre formulaire a bien été envoyé")
					cleanForm()
					isEnabled()
				}
			} catch (e) {
				if (e.response.data.error === "Missing parameters") {
					alert("Veuillez remplir tous les champs du formulaire")
				} else {
					alert("Une erreur est survenue")
					cleanForm()
				}

				isEnabled()
			}
		}
	}

	return (
		<div>
			<div className="block rounded-lg shadow-lg bg-[#0f0f0f] xl:max-w-lg">
				<form id="contact-form" onSubmit={(e) => handleSubmit(e)}>
					<div className="grid grid-cols-2 gap-4">
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-400
          bg-[#0f0f0f] bg-clip-padding
          border border-solid border-gray-700
          rounded
          transition
          ease-in-out
          m-0
          focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none"
								id="exampleInput123"
								aria-describedby="emailHelp123"
								placeholder="Prénom"
								onChange={(e) => setPrenom(e.target.value)}
							/>
						</div>
						<div className="form-group mb-6">
							<input
								type="text"
								className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-400
          bg-[#0f0f0f] bg-clip-padding
          border border-solid border-gray-700
          rounded
          transition
          ease-in-out
          m-0
          focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none"
								id="exampleInput124"
								aria-describedby="emailHelp124"
								placeholder="Nom"
								onChange={(e) => setNom(e.target.value)}
							/>
						</div>
					</div>

					<div className="form-group mb-6">
						{/* <label
							for="exampleTel0"
							class="form-label inline-block mb-2 text-gray-700"
						>
							Phone input
						</label> */}
						<input
							type="tel"
							className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-400
        bg-[#0f0f0f] bg-clip-padding
        border border-solid border-gray-700
        rounded
        transition
        ease-in-out
        m-0
        focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none
      "
							id="exampleTel0"
							placeholder="Téléphone"
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>

					<div className="form-group mb-6">
						<input
							type="email"
							className="form-control block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-400
       bg-[#0f0f0f] bg-clip-padding
       border border-solid border-gray-700
       rounded
       transition
       ease-in-out
       m-0
       focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none"
							id="exampleInput8"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group mb-6">
						<textarea
							className="
       form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-400
       bg-[#0f0f0f] bg-clip-padding
       border border-solid border-gray-700
       rounded
       transition
       ease-in-out
       m-0
       focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none
     "
							id="exampleFormControlTextarea11"
							rows="3"
							placeholder="Votre message..."
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>

					{/* Début piece jointe */}
					<div className="flex justify-left my-5">
						<div className="mb-3 w-full relative">
							<label
								htmlFor="formFileMultiple"
								className="form-label inline-block mb-2 text-gray-400"
							>
								Joindre un fichier :
								<span className="text-xs block mt-1 text-gray-400 pr-[35%]">
									Si vous avez plusieurs documents, veuillez les rassembler en
									une archive compressée (zip / rar)
									<span className="underline absolute right-0">
										25mo max au total
									</span>
								</span>
							</label>
							<input
								className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-400
    bg-[#0f0f0f] bg-clip-padding
    border border-solid border-gray-700
    rounded
    transition
    ease-in-out
    m-0
    focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-nonefocus:outline-none"
								type="file"
								id="formFileMultiple"
								name="myfile"
								onChange={handleFileChange}
							/>
						</div>
					</div>
					<span
						className="hidden text-red-600 text-sm mt-[-10px] "
						id="alertMaxsize"
					>
						Votre fichier ne doit pas dépasser les 25Mo
					</span>
					{/* Fin piece jointe */}

					<button
						id="submit-btn"
						type="submit"
						className="
     w-full
     px-6
     py-4
     mt-5
     bg-[#c3a079]
     text-white
     font-medium
     text-sm
     leading-tight
     uppercase
     rounded
     shadow-md
     hover:bg-[#9d7f5e] hover:shadow-lg
     focus:bg-[#9d7f5e] focus:shadow-lg focus:outline-none focus:ring-0
     active:bg-[#9d7f5e] active:shadow-lg
     transition
     duration-150
     ease-in-out btn-form"
					>
						Envoyer
					</button>
					<div className="hidden" id="loader">
						<div className="mx-auto flex justify-center">
							<ThreeDots
								id="loaderId"
								height="80"
								width="80"
								radius="9"
								color="#c3a079"
								ariaLabel="three-dots-loading"
								wrapperStyle={{}}
								wrapperClassName=""
								visible={true}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Formulaire
