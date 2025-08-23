
import genres from "@/data/genres";
import APICLIENT, { type FetchResposnse } from "@/services/api-client";
import { genresKey } from "@/services/constants/genres";
import { type Genres } from "@/services/genre-service";
import { useQuery } from "@tanstack/react-query";
import ms from 'ms';

const api = new APICLIENT<Genres>('/genres');
export const useGenres = () => {
  return useQuery<FetchResposnse<Genres>, Error>({
    queryKey:genresKey,
    queryFn:api.getAll,
    staleTime: ms('24h'),
    initialData: genres
  })
};
