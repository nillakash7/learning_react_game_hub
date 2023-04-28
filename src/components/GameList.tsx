import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { CustomAlert } from "./CustomAlert";
import { GameCard } from "./GameCard";

export const GameList = () => {
  const { games, error, isLoading, setGames, setLoading, setErrors } =
    useGames();

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
        {games.map((gItem) => (
          <GameCard game={gItem}></GameCard>
        ))}
      </SimpleGrid>
    </div>
  );
};
