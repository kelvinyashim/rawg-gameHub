import { Box, Grid, GridItem, HStack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GameGenres from "./components/GameGenres";
import { FilterByPlatform } from "./components/FilterByPlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem area="aside" hideBelow="lg" padding={5}>
        <GameGenres />
      </GridItem>

      <GridItem area="main">
        <Box px={10} py={5}>
          <GameHeading />
          <HStack>
            <FilterByPlatform />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
