/* eslint-disable @typescript-eslint/no-unused-vars */
import { useGame } from "@/hooks/useGame";
import GameCard from "./GameCard";
import { SimpleGrid } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, setError, setGames, isLoading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
        }}
        p={10}
        padding={10}
        margin={3}
        spaceX={10}
        spaceY={10}
      >
        {isLoading &&
          skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
        ;
      </SimpleGrid>
    </>
  );
};
