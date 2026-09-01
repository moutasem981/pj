import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useReviews() {

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, Rating, Comment }) =>
      await authAxiosInstance.post(`/Products/${id}/reviews`, { Rating, Comment }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['product']
      });
    }

  })
}