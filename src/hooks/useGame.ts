import { type GameData } from "@/services/game-service";
import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import APICLIENT, { type FetchResposnse } from "@/services/api-client";

const api = new APICLIENT<GameData>("/games");

export const useGame = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResposnse<GameData>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // ✅ react-query expects undefined when there is no next page
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 25 * 1000, // 25 seconds
  });
};
