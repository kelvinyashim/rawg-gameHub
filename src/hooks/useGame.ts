/* eslint-disable @typescript-eslint/no-unused-vars */

import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import gameService, { type FetchGameResponse, type GameData } from "@/services/game-service";



export const useGame = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const { request, cancel } = gameService.getAll<FetchGameResponse>();

    request
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => cancel();
  }, []);
  return { games, setGames, setError, error };
};
