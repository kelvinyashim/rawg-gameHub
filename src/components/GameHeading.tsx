import { useGenre } from "@/hooks/useGenre";

import { usePlatform } from "@/hooks/usePlatforms";
import { useGameQueryStore } from "@/services/constants/store";
import { Heading } from "@chakra-ui/react";



const GameHeading = () => {
  const gameQuery = useGameQueryStore(s=>s.gameQuery);
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
