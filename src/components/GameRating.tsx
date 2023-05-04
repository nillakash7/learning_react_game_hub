import { HStack, Icon, Image } from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/bs";

interface Props {
  rating: number;
}
export const GameRating = ({ rating }: Props) => {
  let iconList = [];
  for (let index = 0; index < rating; index++) {
    iconList.push(
      <Icon key={index} color="gold" boxSize={5} as={BsFillStarFill}></Icon>
    );
  }
  return (
    <>
      <HStack marginY={3}>{iconList}</HStack>
    </>
  );
};
