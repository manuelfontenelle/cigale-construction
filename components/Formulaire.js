import React from "react"
import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import fr from "date-fns/locale/fr"
registerLocale("fr", fr)

const Formulaire = () => {
	const [startDate, setStartDate] = useState(new Date())
	return (
		<div>
			<div className="block rounded-lg shadow-lg bg-[#0f0f0f] max-w-lg">
				<form>
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
        focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none
      "
							id="exampleTel0"
							placeholder="Téléphone"
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
							id="exampleFormControlTextarea12"
							rows="3"
							placeholder="Votre adresse..."
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
       focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none
     "
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Description des travaux..."
						></textarea>
					</div>

					{/* Début piece jointe */}
					<div className="flex justify-left my-5">
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
								className="block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-[#0f0f0f] bg-clip-padding border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none"
								onChange={(date) => setStartDate(date)}
								locale="fr"
							/>
						</div>
					</div>

					{/* <div className="flex items-center justify-center">
						<div
							className="datepicker relative form-floating mb-3 xl:w-96"
							data-mdb-toggle-button="false"
						>
							<input
								type="text"
								className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-400 bg-[#0f0f0f] bg-clip-padding border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:text-white focus:bg-black focus:border-blue-600 focus:outline-none"
								placeholder="Select a date"
							/>
							<label htmlFor="floatingInput" className="text-gray-400">
								Sélectionner une date
							</label>
							<button
								className="datepicker-toggle-button"
								data-mdb-toggle="datepicker"
							>
								<i className="fas fa-calendar datepicker-toggle-icon"></i>
							</button>
						</div>
					</div> */}

					<button
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
