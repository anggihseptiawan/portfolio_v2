import { CardWrapper } from "./Card.styled";
import { Heading } from "@chakra-ui/react";

type CardProps = {
	filename: string;
	title: string;
	desc: string;
};

export const Card = ({ filename, title, desc }: CardProps) => {
	return (
		<CardWrapper>
			<img src={`/images/${filename}`} />
			<Heading as="h5" size="md">
				{title}
			</Heading>
			<p>{desc}</p>
		</CardWrapper>
	);
};
