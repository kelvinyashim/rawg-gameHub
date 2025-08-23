/* eslint-disable @typescript-eslint/no-unused-vars */


import platform from "@/data/platform";
import APICLIENT from "@/services/api-client";
import { platformsKey } from "@/services/constants/platform";
import type { Platform } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";

const api = new APICLIENT<Platform>('/genres');

export const usePlatforms = () => {
 

  return useQuery({
    queryKey:platformsKey,
    queryFn: api.getAll,
    staleTime:24 * 60 * 60 * 1000,
    initialData: {count:platform.length, results: platform}

  })
};
