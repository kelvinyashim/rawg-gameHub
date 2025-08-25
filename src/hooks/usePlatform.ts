/* eslint-disable @typescript-eslint/no-unused-vars */

import platform from "@/data/platform";
import APICLIENT, { type FetchResposnse } from "@/services/api-client";
import { platformsKey } from "@/services/constants/platform";
import type { Platform } from "@/services/game-service";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const api = new APICLIENT<Platform>("/platforms/lists/parents");

export const usePlatforms = () => {
  return useQuery<FetchResposnse<Platform>, Error>({
    queryKey: platformsKey,
    queryFn: api.getAll,
    staleTime: ms("24h"),
    initialData:platform
  });
};
