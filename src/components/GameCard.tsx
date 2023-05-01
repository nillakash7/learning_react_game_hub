import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import { PlatformIconList } from "./PlatformIconList";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList platforms={game.parent_platforms}></PlatformIconList>
      </CardBody>
    </Card>
  );
};
