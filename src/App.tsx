import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameList, SearchParameters } from "./components/GameList";
import { GenresList } from "./components/GenresList";
import { useState } from "react";
import { PlatformList } from "./components/PlatformList";
import { GameSorting } from "./components/GameSorting";
import { GameHeading } from "./components/GameHeading";
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
        <NavBar
          onInputKeyword={(pKeyword) =>
            setSearchBy({ ...searchBy, keyword: pKeyword })
          }
        ></NavBar>
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
      <GridItem area="main" margin="5px">
        <GameHeading
          platform={searchBy?.platform?.name}
          genres={searchBy?.genres?.name}
        ></GameHeading>
        <Flex marginBottom="20px">
          <Box paddingRight="10px">
            <PlatformList
              selectedPlatform={searchBy?.platform?.name}
              onSelectPlatform={(selectedPlatform) => {
                setSearchBy({ ...searchBy, platform: selectedPlatform });
              }}
            ></PlatformList>
          </Box>
          <GameSorting
            selectedSortBy={searchBy?.sortyBy?.name}
            onSelectSortBy={(selectedSortBy) => {
              setSearchBy({ ...searchBy, sortyBy: selectedSortBy });
            }}
          ></GameSorting>
        </Flex>
        <GameList searchBy={searchBy} />
      </GridItem>
      <GridItem area="footer" bg="purple">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
