import axiosInstance from '@/api/axiosInstance'
import i18n from '@/i18next';
import { useQuery } from '@tanstack/react-query';

export default function useProductByCat(categoryId) { 

    const getProductsByCat = async () => {
       const response = await axiosInstance.get(`/Products/category/${categoryId}`)
       return response.data;
    }
 
  const query = useQuery({
    queryKey: ['productsCategory', categoryId, i18n.language],
    queryFn: getProductsByCat,
    staleTime: 1000 * 60 * 5,
      enabled: !!categoryId,
  })

  return query;
}