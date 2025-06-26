import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Tensai Kit - Autonomous DeFi Agent Kit on Katana</title>
				<meta
					name="description"
					content="Autonomous DeFi Agent Kit on Katana"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/iconyellowcircle.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
