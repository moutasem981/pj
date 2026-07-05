import React from 'react'
import axiosInstance from '../../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';

export default function UseProducts() {

    const getProducts = async () => {

        const response = await axiosInstance.get(`/Products`);
        return response.data;

         }

        const query = useQuery({
            queryKey: ["products"],
            queryFn: getProducts,
            staleTime: 1000 * 60 * 5

        })
        return query;



}
