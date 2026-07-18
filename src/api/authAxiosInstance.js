import axios from 'axios'
import useAuthStore from '../store/useAuthStore';
import i18n from '../i18next';

const token = useAuthStore.getState().token;

const authAxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_API_URL ,
    headers:{
        Authorization : `Bearer ${token}`

    }
});

 authAxiosInstance.interceptors.request.use((config)=>{
    config.headers["Accept-language"] = i18n.language;
    return config;
  })

export default authAxiosInstance;