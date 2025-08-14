/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGame } from "@/hooks/useGame";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";




export const GameGrid = () => {
 const {games, error, setError, setGames} =useGame();

  return (
    <>
    
    {error && <p className="text-danger">{error}</p>}
    
     <SimpleGrid columns={{
      sm:1,
      md:2,
      lg:3
     }}  p={10} padding={10} margin={3} spaceX={10} spaceY={10}>
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
    </>
  );
};
