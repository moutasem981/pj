import axios from 'axios'
import useAuthStore from '../store/useAuthStore';

const token = useAuthStore.getState().token;

const authAxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_URL ,
    headers:{
        "Accept-language":"en",
        Authorization : `Bearer ${token}`

    }
});
export default authAxiosInstance;