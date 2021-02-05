import { ChakraProvider, Box, BoxProps } from "@chakra-ui/react";
import theme from "./theme";
import NProgress from "nprogress";
import Router from "next/router";
import Head from "next/head";

import "nprogress/nprogress.css";
import { Navbar } from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { AppProps } from "next/app";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
	const MotionBox = motion.custom<BoxProps>(Box);

	return (
		<>
			<Head>
				<title>Anggih Septiawan's Portfolio</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ChakraProvider theme={theme}>
				<Navbar />
				<AnimatePresence exitBeforeEnter>
					<MotionBox
						as="main"
						animate="enter"
						exit="exit"
						flexGrow={1}
						initial="initial"
						variants={{
							initial: { opacity: 0, y: -40 },
							enter: { opacity: 1, y: 0 },
							exit: { opacity: 0, y: 40 },
						}}
					>
						<Component {...pageProps} />
					</MotionBox>
				</AnimatePresence>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
