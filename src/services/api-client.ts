import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResposnse<T>{
    count:number;
    results: T[];
    next:string | null;
}
 const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'6ce1cc5c1b874ef8ba477e665104f6b8'
    }
})


interface Entity{
    id: number
}
class APICLIENT <T extends Entity>{
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

getAll = (config: AxiosRequestConfig)=>{

  return axiosInstance.get<FetchResposnse<T>>(this.endpoint, config).then(res=>res.data);
}


  create = (entity: T)=> {
    return axiosInstance.post(this.endpoint, entity);
  }

  delete = (id: number) =>{
    return axiosInstance.delete(this.endpoint + "/" + id);
  }
  update = (entity: T)=>{
    return axiosInstance.put(this.endpoint + '/' + entity.id, entity)
  }
}


export default APICLIENT;