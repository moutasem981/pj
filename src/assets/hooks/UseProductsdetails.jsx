import React from 'react'
import axiosInstance from '../../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../../i18next';

export default function UseProductsdetails(id) {

    const getProductsdetails = async ()=>{

        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
        }

        const query = useQuery({
            queryKey:['product',i18n.language,id],
            queryFn:getProductsdetails,
            staleTime: 1000 * 60 * 5
        })
    
  return query;
}
