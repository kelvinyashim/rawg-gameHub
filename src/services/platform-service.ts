import { create } from "./http"

export interface Platform{
  id: number,
  name:string,
  slug:string 
}

export interface FetchPlatformResponse{
    results: Platform[]
}

export default create('/platforms/lists/parents');