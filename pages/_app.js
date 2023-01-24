// import "../styles/globals.css"
import { useEffect } from "react"
import "../styles/scss/style.scss"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		const use = async () => {
			;(await import("tw-elements")).default
		}
		use()
	}, [])
	return <Component {...pageProps} />
}

export default MyApp
