import React from "react"
import axios from "axios"
import { useState } from "react"

const Formulaire = () => {
	const [prenom, setPrenom] = useState("")
	const [nom, setNom] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	// const [files, setFiles] = useState("")

	// custom js

	// Fin custom js

	const handleSubmit = async (e) => {
		e.preventDefault()

		const form = document.querySelector("#contact-form")
		const submitButton = document.querySelector("#submit-btn")
		// Fonction pour vider les champs du formulaire :
		const cleanForm = () => {
			form.reset()
		}

		// Fonction pour réactiver le bouton d'envoi du formulaire :
		const isEnabled = () => {
			submitButton.removeAttribute("disabled")
			submitButton.classList.remove("disabled-btn")
		}

		// Fonction pour désactiver le bouton d'envoi du formulaire :
		const isDisabled = () => {
			submitButton.setAttribute("disabled", "disabled")
			submitButton.classList.add("disabled-btn")
		}

		isDisabled()

		const data = {
			email: email,
			message: message,
		}

		// console.log(prenom, nom, phone, email, message)

		try {
			// const response = await axios.post("http://localhost:5000/form", data)
			const response = await axios.post(
				"https://nodemailer-perso.herokuapp.com/form",
				data
			)
			// console.log(response)

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

	return (
		<div>
			<div className="block rounded-lg shadow-lg bg-[#0f0f0f] max-w-lg">
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
          focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none"
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
          focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none"
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
        focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none
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
       focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none"
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
       focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none
     "
							id="exampleFormControlTextarea11"
							rows="3"
							placeholder="Votre message..."
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>

					{/* Début piece jointe */}
					{/* <div className="flex justify-left my-5">
						<div className="mb-3 w-96">
							<label
								htmlFor="formFileMultiple"
								className="form-label inline-block mb-2 text-gray-400"
							>
								Joindre un fichier :
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
    focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none"
								type="file"
								id="formFileMultiple"
								multiple
							/>
						</div>
					</div> */}
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
     active:bg-blue-800 active:shadow-lg
     transition
     duration-150
     ease-in-out"
					>
						Envoyer
					</button>
				</form>
			</div>
		</div>
	)
}

export default Formulaire
