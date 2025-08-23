
import genres from "@/data/genres";
import APICLIENT, { type FetchResposnse } from "@/services/api-client";
import { genresKey } from "@/services/constants/genres";
import { type Genres } from "@/services/genre-service";
import { useQuery } from "@tanstack/react-query";

const api = new APICLIENT<Genres>('/genres');
export const useGenres = () => {
  return useQuery<FetchResposnse<Genres>, Error>({
    queryKey:genresKey,
    queryFn:api.getAll,
    staleTime: 10 * 60 * 60 *1000,
    initialData: {count:genres.length, results: genres, next:null}
  })
};
