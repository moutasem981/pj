import axiosInstance from '@/api/axiosInstance'
import { useMutation } from '@tanstack/react-query'

export default function useForgotPassword() {

  return useMutation({
    mutationFn: async (data) => await axiosInstance.post(`/auth/Account/SendCode`, data)
  })

}