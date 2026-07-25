import authAxiosInstance from '@/api/authAxiosInstance'
import { useMutation } from '@tanstack/react-query'
import React from 'react'

export default function useCheckout() {
  return useMutation({
    mutationFn:async(PaymentMethod)=> await authAxiosInstance.post(`/Checkouts`,{PaymentMethod}),
    onSuccess:(response)=>{
        if(response?.data?.url){
            location.href = response.data.url
        }

    }
  })
}
