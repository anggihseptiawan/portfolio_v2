import { Container, Box, Heading, Text } from "@chakra-ui/react";
import { Card } from "@comps/Card";
import styled from "@emotion/styled";

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 10px;
`;

export default function Home() {
	return (
		<Container maxW="7xl" fontWeight={500}>
			<Box className="hero" mt={20} style={{ marginBottom: "55px" }}>
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
			<CardContainer>
				<Card
					filename="image1.jpg"
					title="Kabar Sukabumi"
					desc="Sebuah website portal berita"
				/>
				<Card
					filename="image2.png"
					title="Lenovo Legion"
					desc="Sebuah website turnamen dari lenovo"
				/>
				<Card
					filename="image3.png"
					title="Kocplay"
					desc="Sebuah website jual beli akun game"
				/>
			</CardContainer>
		</Container>
	);
}
