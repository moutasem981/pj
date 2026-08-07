import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useReviews() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, Rating, Comment }) => {
      return await authAxiosInstance.post(`/Products/${id}/reviews`, {
        Rating: Rating,
        Comment: Comment
      })
    },
    onSuccess: (variables) => {
      queryClient.invalidateQueries(['productDetails', variables.id]);
    }
  })
}