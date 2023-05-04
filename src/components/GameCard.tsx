import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { GameCriticScore } from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";
import { Game } from "../hooks/useGames";
import { GameRating } from "./GameRating";

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack marginBottom={2} justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms}
          ></PlatformIconList>
          <GameCriticScore score={game.metacritic}></GameCriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <GameRating rating={game.rating_top}></GameRating>
      </CardBody>
    </Card>
  );
};
