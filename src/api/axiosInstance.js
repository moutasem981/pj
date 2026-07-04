import axios from 'axios'


const axiosInstance = axios.create({
    baseURL:"https://knowledgeshop.runasp.net/api" ,
    headers:{
        "Accept-language":"en"
    }
});
export default axiosInstance