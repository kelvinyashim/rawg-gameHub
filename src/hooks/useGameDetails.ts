import APICLIENT from "@/services/api-client"
import type { GameDetails } from "@/services/game-details-service";
import { useQuery } from "@tanstack/react-query"

const api = new APICLIENT<GameDetails>('/games');
export const useGameDetails = (slug:string | number)=>{
    return useQuery<GameDetails,Error>({
        queryKey:['details', slug],
        queryFn: ()=> api.get(slug)
    });
    
}