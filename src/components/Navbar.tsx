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
	useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";

export const Navbar = () => {
	const [dark, setDark] = useState<Boolean>(false);
	const { colorMode, toggleColorMode } = useColorMode();

	const handleColorMode = () => {
		setDark(!dark);
		toggleColorMode();
	};

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
					<Button onClick={handleColorMode}>
						{dark ? <FiSun /> : <FiMoon />}
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
