import React from 'react'
import UseProductsdetails from '../../hooks/UseProductsdetails'
import { useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';
import Error from '@/assets/components/error/Error';
import { useTranslation } from 'react-i18next';
import { Heart, Minus, Plus, ShoppingBag, ShoppingCart } from 'lucide-react';
import Stars from '@/assets/components/Stars/Stars';
import { Button } from '@base-ui/react';
import useCartQuantity from '@/assets/hooks/useCartQuantity';

export default function Productsdetails() {


    const {id} = useParams();
    const {t} = useTranslation();

    const {mutate:addToCard} = useAddToCart();

    const { updateQuantity, isPending: isUpdatingQuantity } = useCartQuantity();
    

    const {data , isLoading , isError }  = UseProductsdetails(id);
     if(isLoading) return <p>loding .....</p>
     if(isError) return <Error/>
     console.log(data);
    

    return (
      <main>
        <section className='container'>
          <div className='pt-5 pb-15 md:pb-22 text-center'>
            <h1 className='text-primary-bg'>{t('Product Detail')}</h1>
          </div>
          <div className='flex max-md:flex-col max-md:justify-center gap-x-8 border border-primary-addres py-4 px-4'>
            <div className='md:w-5/10 mx-auto '>
             <img id='image-product' src={data.response.image} alt="" className=' max-h-140 mx-auto border border-b-gray-600 mb-2' />
            <div className=' flex gap-1.5'>
             {data.response.subImages.map((img , index)=>
            <img key={index} src={img} alt="product image" onClick={()=> document.getElementById('image-product').src = img} className='w-25/100 border border-b-gray-600 mx-w-25' />  )}
            </div>
            </div>
            <div className='flex flex-col gap-12 md:w-5/10  text-main pt-8'>
              <div className='flex flex-col gap-5'>
                <h2 className='text-primary-bg'>{data.response.name}</h2>
                <span><Stars rate={data.response.rate}/></span>
              </div>
              <span className='text-[20px] font-bold'>{t('the price')}: ${data.response.price}</span>
              <div className='flex flex-col gap-2'>
                <span>{t('Available quantity')} :</span>
                <div className='w-34 h-9 rounded-lg border border-primary-bg flex justify-center items-center' >
                  {data.response.quantity}
                </div>

              </div>
                <div className='w-full mx-auto'>
                  <button onClick={() => {addToCard({ productId: product.id, count: 1 }) }} className='button-main text-white bg-secondary hover:bg-secondary/50 flex gap-2 items-center justify-center w-7/10'><span><ShoppingCart /></span> {t('Add to Cart')}</button>
                  <button className='mt-5 button-main flex gap-2 items-center justify-center w-7/10'><span><Heart /></span> {t('Add to favorites')}</button>

                </div>
            </div>
          </div>
        </section>
      </main>
  )
}
