import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';


export default function useCheckout() {
  const queryClient = useQueryClient();
  const navigate =useNavigate();
  return useMutation({
    mutationFn: async (PaymentMethod) => await authAxiosInstance.post(`/Checkouts`, { PaymentMethod}),

    onSuccess: (response) => {
      queryClient.invalidateQueries({
        queryKey: ['cart']
      });
      queryClient.invalidateQueries({
        queryKey: ['profile']
      });
      if (response?.data?.url) {
        location.href = response.data.url
      }
      if(!response.data.url){
       navigate('/Profile?tab=order')
      }
    }
  })
}