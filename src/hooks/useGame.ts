import { type GameData } from "@/services/game-service";
import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import APICLIENT, { type FetchResposnse } from "@/services/api-client";
const api = new APICLIENT<GameData>('/games');

export const useGame = (gameQuery: GameQuery) => {
  return useQuery<FetchResposnse<GameData>, Error>({
    queryKey: ['games', gameQuery],
    queryFn:()=> api.getAll({
      params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
    }),
    staleTime: 25 * 100,
  });
};
