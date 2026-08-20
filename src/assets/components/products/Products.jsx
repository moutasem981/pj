import React from 'react'
import UseProducts from '../../hooks/UseProducts'
import { Link, useNavigate } from 'react-router-dom';
import Error from '../error/Error';
import {  Heart, ShoppingCart } from 'lucide-react';
import useAddToCart from '@/assets/hooks/useAddToCart';
import useAuthStore from '@/store/useAuthStore';

import { useTranslation } from 'react-i18next';
import { CarouselItem } from '@/components/ui/carousel';
import Stars from '../Stars/Stars';
import { toast } from 'sonner';
import useFavorites from '@/store/useFavorites';
import NotLogged from '../notLogged/NotLogged';
import LodingCard from '../isLoading/LodingCard';

export default function Products({ number, search = '', minPrice = '', maxPrice = '', sortBy = '', ascending = true }) {

  const { data, isLoading, isError } = UseProducts({
    sortBy: sortBy || undefined,
    ascending: sortBy ? ascending : undefined,
  });

  const { mutate: addToCart } = useAddToCart();
  const Token = useAuthStore((state) => state.token);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const favorites = useFavorites((state) => state.favorites);
  const addFavorite = useFavorites((state) => state.addFavorite);
  const removeFavorite = useFavorites((state) => state.removeFavorite);

  if (isLoading) return  <LodingCard/>
  if (isError) return <Error />

  let list = data.response.data.filter((item) => {
    const matchName = item.name.toLowerCase().includes(search.toLowerCase().trim());
    const matchMin = minPrice === '' || item.price >= Number(minPrice);
    const matchMax = maxPrice === '' || item.price <= Number(maxPrice);
    return matchName && matchMin && matchMax;
  });

  function handleAddCart(productId, productName,) {
    addToCart({ productId, count: 1 });
    toast.success(productName, {
      description: t('Added to cart'),
      action: {
        label: t('View Cart'),
        onClick: () => navigate('/Cart'),
      },
    })
  }

  if (number) list = list.slice(0, number);

  return (
    <>
      {list.map((product) => {
        const favorite = favorites.some(
          (item) => item.id === product.id
        );
        return <CarouselItem key={product.id} className='bg-white pl-0 rounded-lg border border-primary-bg relative overflow-hidden min-w-60 z-10 pt-5 mx-7 hover:scale-110 transition-all duration-300'>
          <Link to={`/products/${product.id}`} className='flex justify-center items-center'>
            <img className='w-40 mb-3' src={product.image} />
           {Token ? <Link className='absolute z-10 right-5 top-5' onClick={(e) => {favorite ? removeFavorite(product.id) : addFavorite(product) } } ><Heart className={favorite? "fill-red-500 text-red-500" : "text-primary-bg" }/> </Link>
            :
            <Link className='absolute z-10 right-5 top-5'><Heart/></Link> } 
          </Link>
          <div className='flex flex-col items-center bg-[#EBF3F5] pb-4 w-full'>
            <h3 className='text-main text-[20px] mt-2'>{product.name}</h3>
            <span className='text-[#353535] text-[14px]'>{product.price}$</span>
            <span className='mb-2.5'><Stars rate={product.rate} /></span>
            <div className='w-full flex justify-center'>
              {Token ? (
                <button onClick={() => handleAddCart(product.id, product.name)} className='button-main text-white bg-secondary hover:bg-secondary/50 flex gap-1 items-center justify-center w-7/10 mx-auto'>{t('Add to Cart')}</button>
              ) : <NotLogged text={t('Add to Cart')} />}

            </div>
          </div>
        </CarouselItem>
      })}
    </>
  )
}