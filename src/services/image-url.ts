// Function to take an image URL and return a cropped version of it
import noImage from '../assets/download (1).jpeg'
export const getCroppedImageUrl = (url: string) => {
    if(!url) return noImage;
    // Step 1: Define the substring in the URL where the image path starts.
    // In this case, 'media/' is the marker that tells us where the original image file path begins.
    const target = 'media/';

    // Step 2: Find the index position where 'media/' appears in the given URL.
    // indexOf(target) returns the starting position of 'media/' in the URL.
    // We then add target.length so the index points to the end of 'media/'.
    const index = url.indexOf(target) + target.length;

    // Step 3: Construct a new URL by inserting the crop dimensions right after 'media/'.
    // url.slice(0, index) → takes the URL from the start up to the end of 'media/'
    // 'crop/600/400/' → the crop dimensions (width = 600px, height = 400px)
    // url.slice(index) → the rest of the URL after 'media/'
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}






import apiClient from "./api-url";

interface Entity{
    id: number
}
class HttpService<T extends Entity> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

getAll = (p0?: { params?: unknown })=> {
  const controller = new AbortController();
  const request = apiClient.get<T>(this.endpoint, {
    signal: controller.signal,
    ...p0,   // 👈 include params here
  });
  return { request, cancel: () => controller.abort() };
}

getbyId = (p0?: { params?: unknown })=> {
  return apiClient.get<T>(this.endpoint, {
    ...p0,   // 👈 include params here
  }).then(res=> res.data);
}

get = () => {
  return apiClient.get<T>(this.endpoint).then(res=> res.data);
}



  create = (entity: T) =>{
    return apiClient.post(this.endpoint, entity);
  }

  delete = (id: number) =>{
    return apiClient.delete(this.endpoint + "/" + id);
  }
  update = (entity: T)=>{
    return apiClient.put(this.endpoint + '/' + entity.id, entity)
  }
}


export default HttpService;