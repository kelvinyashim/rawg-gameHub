/* eslint-disable @typescript-eslint/no-unused-vars */

import { type FetchGameResponse } from "@/services/game-service";
import type { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import { gameKey } from "@/services/constants/game";
import apiClient from "@/services/api-client";

export const useGame = (gameQuery: GameQuery) => {
  return useQuery<FetchGameResponse, Error>({
    queryKey: gameKey,
    queryFn: () =>
      apiClient.get("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }).then(res=> res.data),
    staleTime: 25 * 100,
  });
};
