import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const sans = [
	"Merriweather",
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Open Sans'",
	"'Helvetica Neue'",
	"sans-serif",
].join(",");

const mono = [
	"Cousine",
	"Consolas",
	"'Courier New'",
	"Courier",
	"monospace",
].join(",");

const theme = extendTheme({
	fonts: {
		body: sans,
		heading: sans,
		mono,
	},
	config,
});

export default theme;
