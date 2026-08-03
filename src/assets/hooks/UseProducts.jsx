import React from 'react'
import axiosInstance from '../../api/axiosInstance'
import { useQuery } from '@tanstack/react-query';
import i18n from '../../i18next';

export default function UseProducts(params) {

  const getProducts = async () => {
    const response = await axiosInstance.get(`/Products`, { params });
    return response.data;
  }

  const query = useQuery({
    queryKey: ["products", i18n.language, params],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5
  })

  return query;
}