import { Container, Box, Heading, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<Container maxW="7xl" fontWeight={500}>
			<Box className="hero" mt={20}>
				<Heading as="h1" size="4xl">
					A STUDENT
				</Heading>
				<Heading as="h2" size="4xl">
					FRONTEND DEVELOPER
				</Heading>
				<Heading as="h2" size="4xl">
					TECH ENTHUSIAST
				</Heading>
				<Text fontSize="xl" mt={5}>
					I create something cool especially webite
				</Text>
			</Box>
		</Container>
	);
}
