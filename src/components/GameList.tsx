import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { CustomAlert } from "./CustomAlert";
import { GameCard } from "./GameCard";
import { GameCardShadow } from "./GameCardShadow";

export const GameList = () => {
  const { games, error, isLoading } = useGames();
  const shadowGames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      {error && (
        <CustomAlert alertType="error" alertMessage={error}></CustomAlert>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          shadowGames.map((sgItem) => (
            <GameCardShadow key={sgItem}></GameCardShadow>
          ))}
        {games.map((gItem) => (
          <GameCard game={gItem}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
};
