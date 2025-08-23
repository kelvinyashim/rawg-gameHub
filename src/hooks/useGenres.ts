
import genres from "@/data/genres";
import apiClient from "@/services/api-client";
import { genresKey } from "@/services/constants/genres";
import { type FecthGenreResponse } from "@/services/genre-service";
import { useQuery } from "@tanstack/react-query";

export const useGenres = () => {
  return useQuery<FecthGenreResponse,Error>({
    queryKey:genresKey,
    queryFn: ()=> apiClient.get('/genres').then(res=>res.data),
    staleTime: 10 * 60 * 60 *1000,
    initialData: { results: genres}
  })
};
