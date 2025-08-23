import { usePlatforms } from "./usePlatform";

export const usePlatform = (id?: number) => {
  const { data: platform } = usePlatforms();
  return platform?.results.find((plat) => plat.id === id);
};
