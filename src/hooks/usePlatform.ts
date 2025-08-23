/* eslint-disable @typescript-eslint/no-unused-vars */


import platform from "@/data/platform";
import apiClient from "@/services/api-client";
import { platformsKey } from "@/services/constants/platform";
import type { FetchPlatformResponse } from "@/services/platform-service";
import { useQuery } from "@tanstack/react-query";


export const usePlatforms = () => {
 

  return useQuery<FetchPlatformResponse,Error>({
    queryKey:platformsKey,
    queryFn:()=> apiClient.get('/platforms/lists/parents'),
    staleTime:24 * 60 * 60 * 1000,
    initialData: {results: platform}

  })
};
