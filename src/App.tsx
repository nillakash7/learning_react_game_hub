import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameList, SearchParameters } from "./components/GameList";
import { GenresList } from "./components/GenresList";
import { useState } from "react";
import { PlatformIconList } from "./components/PlatformIconList";
import { PlatformList } from "./components/PlatformList";
import { GameSorting } from "./components/GameSorting";
const App = () => {
  const [searchBy, setSearchBy] = useState<SearchParameters | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginX={3}>
          <GenresList
            selectedGenres={searchBy?.genres?.id}
            onSelectGenres={(pGenres) =>
              setSearchBy({ ...searchBy, genres: pGenres })
            }
          ></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack spacing={3}>
          <PlatformList
            selectedPlatform={searchBy?.platform?.name}
            onSelectPlatform={(selectedPlatform) => {
              setSearchBy({ ...searchBy, platform: selectedPlatform });
            }}
          ></PlatformList>
          <GameSorting
            selectedSortBy={searchBy?.sortyBy?.name}
            onSelectSortBy={(selectedSortBy) => {
              setSearchBy({ ...searchBy, sortyBy: selectedSortBy });
            }}
          ></GameSorting>
        </HStack>
        <GameList searchBy={searchBy} />
      </GridItem>
      <GridItem area="footer" bg="purple">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
