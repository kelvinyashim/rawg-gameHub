import { type GameData } from "@/services/game-service";
import type { GameQuery } from "@/App";
import { useInfiniteQuery } from "@tanstack/react-query";
import APICLIENT, { type FetchResposnse } from "@/services/api-client";
import useInfiniteScroll from "react-infinite-scroll-hook";

const api = new APICLIENT<GameData>("/games");

export const useGame = (gameQuery: GameQuery) => {
  const {data, fetchNextPage, isFetchingNextPage, hasNextPage, ...rest} = useInfiniteQuery<FetchResposnse<GameData>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      api.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
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
    staleTime: 24 * 60 * 60 * 1000, 
  });

    const [sentryRef] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    onLoadMore: fetchNextPage,
    disabled: !!rest.error,
    rootMargin: "0px 0px 400px 0px",
  });

  return {
    games: data,
    sentryRef, 
    isFetchingNextPage,
    hasNextPage,
    ...rest,
  };
};

