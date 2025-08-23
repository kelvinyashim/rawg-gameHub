import { useGame } from "@/hooks/useGame";
import GameCard from "./GameCard";
import { SimpleGrid, Box, Text, } from "@chakra-ui/react";
import { GameCardSkeleton } from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: Props) => {
  const {
     games,
    error,
    isLoading,
    sentryRef,
    isFetchingNextPage,
    hasNextPage,
  } = useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text color="red.500">{error.message}</Text>;

  return (
    <Box p={10} py={2} >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage ? (
         <div ref={sentryRef}>
        {isFetchingNextPage && <p>Loading more...</p>}
      </div>
      ) : null}
    </Box>
  );
};
