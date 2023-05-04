import { Flex, Heading } from "@chakra-ui/react";

interface Props {
  platform?: string;
  genres?: string;
}
export const GameHeading = ({ platform, genres }: Props) => {
  return (
    <Heading marginY={5} fontSize="5xl">
      {platform} {genres} Games
    </Heading>
  );
};
