import axiosInstance from '@/api/axiosInstance'
import useAuthStore from '@/store/useAuthStore';
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';

export default function useRegister() {
  const setToken = useAuthStore((state) => state.setToken)
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosInstance.post(`/auth/Account/Register`, data)
      return response.data;
    },
    onSuccess: (data) => {
      setToken(data.accessToken);
      navigate('/Login');
    }
  })
}