import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'6ce1cc5c1b874ef8ba477e665104f6b8'
    }
})