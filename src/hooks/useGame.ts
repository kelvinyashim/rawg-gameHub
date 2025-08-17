/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import gameService, {
  type FetchGameResponse,
  type GameData,
} from "@/services/game-service";



export const useGame = (selectedGenreId?: number, selectedPlatform?: number) => {
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gameService
      .getAll<FetchGameResponse>({ params: { genres: selectedGenreId, platforms: selectedPlatform } }).request // 👈 filter by genre
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedGenreId,selectedPlatform]); 

  return { games, error, setError, setGames, isLoading };
};
