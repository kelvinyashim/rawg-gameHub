import type { FecthGenreResponse, Genres } from "@/services/genre-service";
import { useEffect, useState } from "react";
import genreService from "@/services/genre-service";
import { CanceledError } from "axios";

export const useGenres = ()=>{
    const [genres, setGenres] = useState<Genres[]>([]);
      const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{
const {request, cancel}  = genreService.getAll<FecthGenreResponse>();
 request
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { genres, setError, error, isLoading };

  }