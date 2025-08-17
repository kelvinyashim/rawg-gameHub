import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GameGenres from "./components/GameGenres";
import { useState } from "react";
import type { Genres } from "./services/genre-service";
import { FilterByPlatform } from "./components/FilterByPlatform";
import type { Platform } from "./services/game-service";

const App = () => {
  const [selectedGenre, setGenre] = useState<Genres | null>(null);
  const [selectedPlatform, setPlatform] = useState<Platform | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, //for mobile
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={
        {
          base: '1fr',
          lg: '200px 1fr'
        }
      } 
    >
      <GridItem area="nav">
        <NavBar/>
      </GridItem>

      <GridItem area="aside" hideBelow="lg" padding={5}>
          <GameGenres onSelectedGenre={(genre)=> setGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <FilterByPlatform selectedPlatform={selectedPlatform} onSelectedPlatform={(platform)=> setPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
};

export default App;
