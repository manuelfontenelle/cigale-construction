import React from "react"
import { useState } from "react"
import axios from "axios"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import fr from "date-fns/locale/fr"
registerLocale("fr", fr)

const Formulaire = () => {
	const [prenom, setPrenom] = useState("")
	const [nom, setNom] = useState("")
	const [phone, setPhone] = useState("")
	const [email, setEmail] = useState("")
	const [adresse, setAdresse] = useState("")
	const [message, setMessage] = useState("")
	const [selectedFiles, setSelectedFiles] = useState(null)
	const [startDate, setStartDate] = useState(new Date())

	console.log(selectedFiles)

	const handleFileEvent = (e) => {
		setSelectedFiles(e.target.files[0])
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
		formData.append("adresse", adresse)
		formData.append("message", message)
		formData.append("startDate", startDate)
		formData.append("selectedFiles", selectedFiles)

		// for (let i = 0; i < selectedFiles.length; i++) {
		// 	formData.append("selectedFiles", selectedFiles[i])
		// }

		const form = document.querySelector("#contact-form1")
		const submitButton = document.querySelector("#submit-btn1")
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

		// const config = {
		// 	headers: { "content-type": "multipart/form-data; boundary=XXX" },
		// }
		// console.log(prenom, nom, phone, email, message)

		try {
			// const response = await axios.post("http://localhost:5000/form1", formData)
			const response = await axios.post(
				"https://nodemailer-perso.herokuapp.com/form1",
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

	return (
		<div>
			<div className="block rounded-lg shadow-lg bg-[#0f0f0f] max-w-lg">
				<form
					id="contact-form1"
					onSubmit={(e) => handleSubmit(e)}
					encType="multipart/form-data"
				>
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
							id="exampleFormControlTextarea12"
							rows="3"
							placeholder="Votre adresse..."
							onChange={(e) => setAdresse(e.target.value)}
						></textarea>
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
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Description des travaux..."
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
					</div>

					{/* Début piece jointe */}
					<div className="flex justify-left my-5">
						<div className="mb-3 w-96">
							<label
								htmlFor="formFileMultiple2"
								className="form-label inline-block mb-2 text-gray-400"
							>
								Joindre des fichiers :
								<span className="text-xs block">
									Si vous avez plusieurs documents, veuillez les rassembler en
									une archive compressée (zip / Rar)
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
    focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none"
								type="file"
								id="formFileMultiple2"
								onChange={handleFileEvent}
							/>
						</div>
					</div>
					{/* Fin piece jointe */}

					<div className="flex justify-left my-5">
						<div className="mb-3 w-96">
							<label
								htmlFor="floatingInput"
								className="text-gray-400 block mb-2"
							>
								Sélectionner une date :
							</label>
							<DatePicker
								selected={startDate}
								className="block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-[#0f0f0f] bg-clip-padding border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:text-white focus:bg-black focus:border-[#c3a079] focus:shadow-none focus:outline-none"
								onChange={(date) => setStartDate(date)}
								locale="fr"
							/>
						</div>
					</div>

					<button
						id="submit-btn1"
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
				</form>
			</div>
		</div>
	)
}

export default Formulaire
