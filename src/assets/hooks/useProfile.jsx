import authAxiosInstance from '@/api/authAxiosInstance'
import i18n from '@/i18next';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

export default function useProfile() {
    
  const getProfileInfo = async ()=> { const 
    response = await authAxiosInstance.get(`/Profile`)  
    return  response.data;
  }

  return useQuery({
    queryKey:["info" , i18n.language],
    queryFn: getProfileInfo,
    staleTime: 1000 * 60 * 5 
  });
}
