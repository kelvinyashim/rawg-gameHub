
export interface Platform{
  id: number,
  name:string,
  slug:string 
}
export interface GameData {
  id: number;
  name: string;
  background_image: string;
  platforms: {
    platform: Platform
  }[],
  metacritic: number,
  ordering:string,
  rating_top:number
}


export interface FetchGameResponse {
  count: number;
  results: GameData[];
}




