import { useQuery } from '@tanstack/react-query';
import React from 'react'
import axiosInstance from '../../../api/axiosInstance';

export default function UseCategories() {
const getCategories = async ()=>{
        const response = await axiosInstance.get(`/Categories`);
        
        return response.data ;
       
        }
    

    const query = useQuery({
        queryKey:['Categories'],
        queryFn:getCategories,
        staleTime: 1000 * 60 * 5 
    })
    return query;
}
