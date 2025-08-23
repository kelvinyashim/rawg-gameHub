import type { GameQuery } from "@/App";
import { useGenre } from "@/hooks/useGenre";

import { usePlatform } from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const selectedPlat = usePlatform(gameQuery.platformId);
 

  const heading = `${genre?.name ?? ""} ${selectedPlat?.name ?? ""} Games`;

  return (
    <Heading ms={0} me={1} size="4xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
