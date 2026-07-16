import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import authAxiosInstance from '../../api/authAxiosInstance';

export default function useRemoveFormCart() {

    const queryClinent = useQueryClient();
  return useMutation({
    mutationFn: async(cartItemId)=> authAxiosInstance.delete(`/Carts/${cartItemId}`)
    ,onSuccess:()=>{
        queryClinent.invalidateQueries({
            queryKey:['cart']
        })
    }
  });
}
