import axios from 'axios'
import useAuthStore from '../store/useAuthStore';
import i18n from '../i18next';

const authAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

authAxiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.headers["Accept-language"] = i18n.language;
  return config;
});
export default authAxiosInstance;