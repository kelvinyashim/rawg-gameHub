/* eslint-disable @typescript-eslint/no-unused-vars */
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface GameData {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

interface FetchGameResponse {
  count: number;
  results: GameData[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<GameData[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/xgames", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if(err instanceof CanceledError) return;
        setError(err.message) 

      });
    return () => controller.abort();
  }, []);

  return (
    <>
    
    {error && <p className="text-danger">{error}</p>}
    
    <div className="mb-3">
      <ul className="list-group">
        {games.map((game) => (
          <li key={game.id} className="list-group-item">
            {game.name}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};
