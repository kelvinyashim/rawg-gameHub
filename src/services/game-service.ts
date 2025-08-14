import { create } from "./http.ts";

export interface GameData {
  id: number;
  name: string;
  background_image: string;
  rating: number;
}

export interface FetchGameResponse {
  count: number;
  results: GameData[];
}

export default create('/games');