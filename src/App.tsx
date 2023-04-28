import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg="blue">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="green">
          Menu
        </GridItem>
      </Show>
      <GridItem area="main" bg="red">
        Body
      </GridItem>
      <GridItem area="footer" bg="purple">
        Footer
      </GridItem>
    </Grid>
  );
};

export default App;
