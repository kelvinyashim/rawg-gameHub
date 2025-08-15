import { create } from "./http"

export interface FecthGenreResponse{
    results: Genres[]
}

export interface Genres{
    id: number,
    name:string
}

export default create('/genres');