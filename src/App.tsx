import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GameGenres from "./components/GameGenres";
import { useState } from "react";
import type { Genres } from "./services/genre-service";
import { FilterByPlatform } from "./components/FilterByPlatform";
import type { Platform } from "./services/game-service";

export interface GameQuery{
  genre: Genres | null;
  platform: Platform | null;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <GameGenres onSelectedGenre={(genre)=> setGameQuery({...gameQuery, genre})} />
      </GridItem>

      <GridItem area="main">
        <FilterByPlatform selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform)=> setGameQuery({...gameQuery,platform})}/>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
};

export default App;
