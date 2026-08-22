import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation } from '@tanstack/react-query'

export default function useChangePassword() {
  return useMutation({
    mutationFn: async (data) => await authAxiosInstance.patch(`/Profile/change-password`, data)
  })
}