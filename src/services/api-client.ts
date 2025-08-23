import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'6ce1cc5c1b874ef8ba477e665104f6b8'
    }
})

import apiClient from "./api-client";

interface Entity{
    id: number
}
class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

getAll<T>(p0?: { params?: unknown }) {
  const controller = new AbortController();
  const request = apiClient.get<T>(this.endpoint, {
    signal: controller.signal,
    ...p0,   // 👈 include params here
  });
  return { request, cancel: () => controller.abort() };
}


  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity);
  }

  delete(id: number) {
    return apiClient.delete(this.endpoint + "/" + id);
  }
  update<T extends Entity>(entity: T){
    return apiClient.put(this.endpoint + '/' + entity.id, entity)
  }
}


export const create = (endpoint:string)=> new HttpService(endpoint);