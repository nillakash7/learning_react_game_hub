import { SimpleGrid } from "@chakra-ui/react";
import { CustomAlert } from "./CustomAlert";
import { GameCard } from "./GameCard";
import { GameCardShadow } from "./GameCardShadow";
import { GameCardContainer } from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";

export interface SearchParameters {
  genres?: Genres;
}

interface Props {
  searchBy: SearchParameters | null;
}

export const GameList = ({ searchBy }: Props) => {
  const { data, error, isLoading } = useGames(searchBy?.genres?.id);
  const shadowGames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div>
      {error && (
        <CustomAlert alertType="error" alertMessage={error}></CustomAlert>
      )}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          shadowGames.map((sgItem) => (
            <GameCardContainer key={sgItem}>
              <GameCardShadow></GameCardShadow>
            </GameCardContainer>
          ))}
        {data.map((gItem) => (
          <GameCardContainer key={gItem.id}>
            <GameCard game={gItem}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};
