import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../services/game-service";
import { PlatformIconList } from "./PlatformIconList";
import { GameCriticScore } from "./GameCriticScore";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack marginTop="5" justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms}
          ></PlatformIconList>
          <GameCriticScore score={game.metacritic}></GameCriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};
