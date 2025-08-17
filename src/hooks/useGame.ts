/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import gameService, {
  type FetchGameResponse,
  type GameData,
} from "@/services/game-service";
import type { GameQuery } from "@/App";

export const useGame = (gameQuery: GameQuery,) => {
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gameService
      .getAll<FetchGameResponse>({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
        },
      })
      .request // 👈 filter by genre
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [gameQuery]);

  return { games, error, setError, setGames, isLoading };
};
