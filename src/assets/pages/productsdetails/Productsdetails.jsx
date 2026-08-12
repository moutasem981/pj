import React from 'react'
import UseProductsdetails from '../../hooks/UseProductsdetails'
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';
import Error from '@/assets/components/error/Error';
import { useTranslation } from 'react-i18next';
import { Heart, ShoppingCart } from 'lucide-react';
import Stars from '@/assets/components/Stars/Stars';
import useCartQuantity from '@/assets/hooks/useCartQuantity';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import useFavorites from '@/store/useFavorites';
import useAuthStore from '@/store/useAuthStore';
import NotLogged from '@/assets/components/notLogged/NotLogged';
import { toast } from 'sonner';

export default function Productsdetails() {


  const { id } = useParams();
  const { t } = useTranslation();
    const Token = useAuthStore((state) => state.token);
  

  const { mutate: addToCart } = useAddToCart();


  const { data, isLoading, isError } = UseProductsdetails(id);

  const favorites = useFavorites((state) => state.favorites);
  const addFavorite = useFavorites((state) => state.addFavorite);
  const removeFavorite = useFavorites((state) => state.removeFavorite);
  const navigate = useNavigate();

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

  if (isLoading) return <p>loding .....</p>
  if (isError) return <Error />

  const product = data.response;

  const favorite = favorites.some(
    (item) => item.id === product.id
  );
   
  const {image , subImages , name , rate ,price ,quantity , reviews} = data.response ;

  return (
    <main>
      <section className='container'>
        <div className='pt-5 pb-15 md:pb-22 text-center'>
          <h1 className='text-primary-bg'>{t('Product Detail')}</h1>
        </div>
        <div className='flex max-md:flex-col max-md:justify-center gap-x-8 border border-primary-addres py-4 px-4'>
          <div className='md:w-5/10 mx-auto flex gap-2 '>
            <img id='image-product' src={image} alt="product image" className=' w-8/10 max-h-145 mx-auto border border-b-gray-600 mb-2' />
            <div className=' flex flex-col gap-1.5'>
              <img src={image} alt="product image" onClick={() => document.getElementById('image-product').src = data.response.image} className=' border border-b-gray-600  max-h-30 ' />
              {subImages.map((img, index) =>
                <img key={index} src={img} alt="product image" onClick={() => document.getElementById('image-product').src = img} className=' border border-b-gray-600 max-h-30' />)}
            </div>
          </div>
          <div className='flex flex-col gap-12 md:w-5/10  text-main pt-8'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-primary-bg'>{name}</h2>
              <span><Stars rate={rate} /></span>
            </div>
            <span className='text-[20px] font-bold'>{t('the price')}: ${price}</span>
            <div className='flex flex-col gap-2'>
              <span>{t('Available quantity')} :</span>
              <div className='w-34 h-9 rounded-lg border border-primary-bg flex justify-center items-center' >
                {quantity}
              </div>

            </div>
            <div className='w-full mx-auto'>
            {Token ? <>
              <button onClick={() => handleAddCart(data.response.id ,name )} className='button-main text-white bg-secondary hover:bg-secondary/50 flex gap-2 items-center justify-center w-7/10'><span><ShoppingCart /></span> {t('Add to Cart')}</button>
              <button onClick={() => { if (favorite) { removeFavorite(product.id); } else { addFavorite(product); } }} className='mt-5 button-main flex gap-2 items-center justify-center w-7/10'
              ><span>
                  <Heart
                    className={
                      favorite
                        ? 'fill-red-500 text-red-500'
                        : ''
                    }
                  />
                </span>
                {favorite ? t('Remove from favorites') : t('Add to favorites')}</button>
            </>:<div className='flex flex-col gap-5'>
            <NotLogged text={t('Add to Cart')} />
            <NotLogged  text={<span  className='flex gap-2 items-center '>
               {t('Add to favorites')} <Heart className={ favorite ? 'fill-red-500 text-red-500' : '' }/>
                 </span>
           } /> </div>}

            </div>
          </div>
        </div>
      </section>



      <section className='container py-10 '>
        <Tabs defaultValue="description">
          <TabsList variant="line" >
            <TabsTrigger value="description"><h3 className="text-primary-bg font-bold  " >{t('DESCRIPTION')}</h3></TabsTrigger>
            <TabsTrigger value="review"><h3 className="text-primary-bg font-bold ">{t('Review & Rating')}</h3></TabsTrigger>
          </TabsList>
          <div className='pt-5 md:pt-10 md:px-7'>
            <TabsContent value="description">
              <p className='text-primary-bg sm:w-8/10 mx-auto' >{data.response.description}</p>
            </TabsContent>
            <TabsContent value="review">
              <div className='flex justify-between items-center pb-10'>
                <span className='text-[20px] font-bold text-primary-addres' >{t('All Reviews')} ({data.response.reviews.length})</span>
                <button>{t('Write a Review')}</button>
              </div>
              <div className='grid gap-y-10  md:grid-cols-2'>

                {reviews.map((review) =>
                  <Link key={review.id} className='border border-primary-addres rounded-lg  overflow-auto shadow-lg py-3.5 px-3 w-8/10 mx-auto flex flex-col justify-between gap-2  hover:scale-110 transition-all duration-300'>
                    <div className='flex justify-between items-center'>
                      <h4 className='text-primary-bg font-bold'>{review.userName}</h4>
                      <span><Stars rate={review.rating} /></span>
                    </div>
                    <p className='text-main text-[14px] '>{review.comment}</p>
                    <span className='text-[10px] text-primary-addres '>{review.createdAt}</span>

                  </Link>)}
              </div>
            </TabsContent>

          </div>
        </Tabs>

      </section>

    </main>
  )
}
