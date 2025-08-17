/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import platformService from "@/services/platform-service";
import type { FetchPlatformResponse, Platform } from "@/services/platform-service";



export const usePlatforms = () => {
  const [platform, setPlatform] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    platformService
      .getAll<FetchPlatformResponse>().request 
      .then((res) => {
        setPlatform(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // 👈 refetch whenever genre changes

  return { platform, error, setError, setPlatform, isLoading };
};
