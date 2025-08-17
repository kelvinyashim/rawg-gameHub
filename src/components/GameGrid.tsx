import { useGame } from "@/hooks/useGame";
import GameCard from "./GameCard";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import type { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery

}

export const GameGrid = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <Box px={10} py={1}>
      {error && <Text color="red.500">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap={5} 
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </Box>
  );
};
