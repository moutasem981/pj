import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useUpdateEmail() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => await authAxiosInstance.patch(`/Profile/change-email`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ 
        queryKey: ['profile'] 
    });
    }
  })
}