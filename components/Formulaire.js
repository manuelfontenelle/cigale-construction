import React from "react"

const Formulaire = () => {
	return (
		<div>
			<div class="block p-6 rounded-lg shadow-lg bg-white max-w-lg">
				<form>
					<div class="form-group mb-6">
						<input
							type="text"
							class="form-control block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput7"
							placeholder="Name"
						/>
					</div>
					<div class="form-group mb-6">
						<input
							type="email"
							class="form-control block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
							id="exampleInput8"
							placeholder="Email address"
						/>
					</div>
					<div class="form-group mb-6">
						<textarea
							class="
       form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-700
       bg-white bg-clip-padding
       border border-solid border-gray-300
       rounded
       transition
       ease-in-out
       m-0
       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
     "
							id="exampleFormControlTextarea13"
							rows="3"
							placeholder="Message"
						></textarea>
					</div>
					<div class="form-group form-check text-center mb-6">
						<input
							type="checkbox"
							class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
							id="exampleCheck87"
						/>
						<label
							class="form-check-label inline-block text-gray-800"
							for="exampleCheck87"
						>
							S'abonner à la newletter
						</label>
					</div>
					{/* Début piece jointe */}
					<div class="flex justify-center my-5">
						<div class="mb-3 w-96">
							<label
								for="formFileMultiple"
								class="form-label inline-block mb-2 text-gray-700"
							>
								Multiple files input example
							</label>
							<input
								class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								type="file"
								id="formFileMultiple"
								multiple
							/>
						</div>
					</div>
					{/* Fin piece jointe */}

					<div class="flex items-center justify-center">
						<div
							class="datepicker relative form-floating mb-3 xl:w-96"
							data-mdb-toggle-button="false"
						>
							<input
								type="text"
								class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								placeholder="Select a date"
							/>
							<label for="floatingInput" class="text-gray-700">
								Select a date
							</label>
							<button
								class="datepicker-toggle-button"
								data-mdb-toggle="datepicker"
							>
								<i class="fas fa-calendar datepicker-toggle-icon"></i>
							</button>
						</div>
					</div>

					<button
						type="submit"
						class="
     w-full
     px-6
     py-4
     mt-5
     bg-[#c3a079]
     text-white
     font-medium
     text-xs
     leading-tight
     uppercase
     rounded
     shadow-md
     hover:bg-[#0f0f0f] hover:shadow-lg
     focus:bg-[#0f0f0f] focus:shadow-lg focus:outline-none focus:ring-0
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
