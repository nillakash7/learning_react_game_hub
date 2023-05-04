import { Box, SimpleGrid } from "@chakra-ui/react";
import { CustomAlert } from "./CustomAlert";
import { GameCard } from "./GameCard";
import { GameCardShadow } from "./GameCardShadow";
import { GameCardContainer } from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";
import { SortByItem } from "./GameSorting";

export interface SearchParameters {
  genres?: Genres;
  platform?: Platform;
  sortyBy?: SortByItem;
  keyword?: string;
}

interface Props {
  searchBy: SearchParameters | null;
}

export const GameList = ({ searchBy }: Props) => {
  const { data, error, isLoading } = useGames(searchBy);
  const shadowGames = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  if (error)
    return <CustomAlert alertType="error" alertMessage={error}></CustomAlert>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      marginY={2}
      spacing={6}
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
  );
};
