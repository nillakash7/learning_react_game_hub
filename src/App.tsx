import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameList, SearchParameters } from "./components/GameList";
import { GenresList } from "./components/GenresList";
import { useState } from "react";
const App = () => {
  const [searchBy, setSearchBy] = useState<SearchParameters>({});

  const handleSelectGenres = (pGenresId: number) => {
    setSearchBy({ ...searchBy, genresId: pGenresId });
  };
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" marginX={3}>
          <GenresList onSelectGenres={handleSelectGenres}></GenresList>
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameList searchBy={searchBy} />
      </GridItem>
      <GridItem area="footer" bg="purple">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
