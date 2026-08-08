import React from 'react'
import UseProducts from '../../hooks/UseProducts'
import { Link, useNavigate } from 'react-router-dom';
import Error from '../error/Error';
import { CircleAlert, Heart } from 'lucide-react';
import useAddToCart from '@/assets/hooks/useAddToCart';
import useAuthStore from '@/store/useAuthStore';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslation } from 'react-i18next';
import { CarouselItem } from '@/components/ui/carousel';
import Stars from '../Stars/Stars';
import { Button } from "@/components/ui/button"
import { toast } from 'sonner';

export default function Products({ number, search = '', minPrice = '', maxPrice = '', sortBy = '', ascending = true }) {

  const { data, isLoading, isError } = UseProducts({
    sortBy: sortBy || undefined,
    ascending: sortBy ? ascending : undefined,
  });

  const { mutate: addToCart } = useAddToCart();
  const Token = useAuthStore((state) => state.token);
  const { t } = useTranslation();
  const navigate = useNavigate();

  if (isLoading) return <p>loding....</p>
  if (isError) return <Error />

  let list = data.response.data.filter((item) => {
    const matchName = item.name.toLowerCase().includes(search.toLowerCase().trim());
    const matchMin = minPrice === '' || item.price >= Number(minPrice);
    const matchMax = maxPrice === '' || item.price <= Number(maxPrice);
    return matchName && matchMin && matchMax;
  });
  
  function handleAddCart(productId, productName,){
   addToCart({ productId, count: 1 });
    toast.success(productName, {
          description: t('Added to cart'),
        action: {
      label: t('View Cart'), 
      onClick: () => navigate('/Cart'), 
    },
        })
  }
  console.log(handleAddCart);

  if (number) list = list.slice(0, number);

  return (
    <>
      {list.map((product) => (
        <CarouselItem key={product.id} className='bg-white pl-0 rounded-lg border border-primary-bg relative overflow-hidden min-w-[240px] z-10 pt-5 mx-7 hover:scale-110 transition-all duration-300'>
          <Link  to={`/products/${product.id}`} className='flex justify-center items-center'>
            <img className='w-40 mb-3' src={product.image} />
            <Link className='absolute z-10 right-5 top-5'> <Heart color='#566F6B' /> </Link>
          </Link>
          <div className='flex flex-col items-center bg-[#EBF3F5] pb-4 w-full'>
            <h3 className='text-main text-[20px] mt-2'>{product.name}</h3>
            <span className='text-[#353535] text-[14px]'>{product.price}$</span>
            <span className='mb-2.5'><Stars rate={product.rate} /></span>
            <div className='w-full'>
              {Token ? (
                <button onClick={() => handleAddCart(product.id, product.name,product.image)} className='button-main text-white bg-secondary hover:bg-secondary/50 flex gap-2 items-center justify-center w-7/10 mx-auto'>{t('Add to Cart')}</button>
              ) : (
                <Dialog>
                  <DialogTrigger render={<button className='button-main text-white bg-secondary hover:bg-secondary/50 flex gap-2 items-center justify-center w-7/10'>{t('Add to Cart')}</button>} />
                  <DialogContent showCloseButton={false}>
                    <DialogHeader className='flex flex-col items-center justify-center gap-10'>
                      <DialogTitle className='flex flex-col items-center text-center justify-center gap-6'>
                        <CircleAlert size={70} className='bg-primary-bg p-1.5 rounded-full' />
                        <p className='text-3xl'>{t('Login Required')}</p>
                        <span>{t('You must be logged in to add items or make purchases.')}</span>
                      </DialogTitle>
                      <DialogDescription className='w-full text-center'>
                        <button onClick={() => navigate('Login')} className='button-main w-7/10'>{t('Sign In')}</button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )}
            
            </div>
          </div>
        </CarouselItem>
      ))}
    </>
  )
}