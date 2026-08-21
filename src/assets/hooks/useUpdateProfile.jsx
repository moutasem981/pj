import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function useUpdateProfile() {

      const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async(data)=> await authAxiosInstance.patch(`/Profile`,data)
    , onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile']
      });
    }
  })
}
