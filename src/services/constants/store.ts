import { create } from "zustand";
export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

 interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (text: string) => void;
  setGenreId: (genreId: number) => void;
  setOrder: (order: string) => void;
  setPlatformId: (platId: number) => void;
}

export const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText } })),
}));
