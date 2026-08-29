import axiosInstance from '@/api/axiosInstance'
import { useMutation } from '@tanstack/react-query'

export default function useResetPassword() {

  return useMutation({
    mutationFn: async (data) => await axiosInstance.patch(`/auth/Account/ResetPassword`, data)
  })

}