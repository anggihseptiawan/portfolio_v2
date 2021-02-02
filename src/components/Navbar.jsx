import {
	Box,
	Button,
	Container,
	Stack,
	HStack,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
	const [dark, setDark] = useState(false);

	return (
		<Container as={Stack} maxW="7xl" py={4} spacing={4}>
			<HStack justifyContent="space-between">
				<HStack>
					<Box>
						<Link href="/" passHref>
							<Button as="a" variant="ghost">
								Home
							</Button>
						</Link>
					</Box>
					<Box>
						<Link href="/about" passHref>
							<Button as="a" variant="ghost">
								About
							</Button>
						</Link>
					</Box>
					<Box>
						<Link href="/contact" passHref>
							<Button as="a" variant="ghost">
								Contact
							</Button>
						</Link>
					</Box>
				</HStack>
				<HStack>
					<Button onClick={() => setDark(!dark)}>
						{dark ? <FaSun /> : <FaMoon />}
					</Button>
					<Menu>
						<MenuButton as={Button}>ID</MenuButton>
						<MenuList>
							<MenuItem>INDONESIA</MenuItem>
							<MenuItem>ENGLISH</MenuItem>
						</MenuList>
					</Menu>
				</HStack>
			</HStack>
		</Container>
	);
};
