import React, { useState } from 'react'
import UseProductsdetails from '../../hooks/UseProductsdetails'
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';
import Error from '@/assets/components/error/Error';
import { useTranslation } from 'react-i18next';
import { Heart, MessageSquareText, ShoppingCart, Star } from 'lucide-react';
import Stars from '@/assets/components/Stars/Stars';
import useCartQuantity from '@/assets/hooks/useCartQuantity';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import useFavorites from '@/store/useFavorites';
import useAuthStore from '@/store/useAuthStore';
import NotLogged from '@/assets/components/notLogged/NotLogged';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import useReviews from '@/assets/hooks/useReviews';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReviewSchema } from '@/assets/components/vallidation/ReviewSchema';


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


  const { mutate: addReview, isPending: isAddingReview } = useReviews();

  const [reviewDialogOpen, setReviewDialogOpen] = useState(false);

  const { register: registerReview, handleSubmit: handleSubmitReview, setValue, watch, reset: resetReview, formState: { errors: reviewErrors } } = useForm({

    resolver: yupResolver(ReviewSchema(t)),

    defaultValues: {
      Rating: 0,
      Comment: ''
    }

  });
  const selectedRating = watch('Rating');


  const onSubmitReview = (formData) => {

    addReview(
      {
        id, ...formData
      },
      {
        onSuccess: () => {
          toast.success(t('Review submitted successfully'));
          resetReview();
          setReviewDialogOpen(false);

        },

        onError: (error) => {
          const serverMessage =
            error.response?.data?.message || error.response?.data?.title;

          toast.error(
            serverMessage || t('You can only review a product after purchasing it.')
          );

        }
      }
    );

  };

  if (isLoading) return <p>loding .....</p>
  if (isError) return <Error />

  const product = data.response;

  const favorite = favorites.some(
    (item) => item.id === product.id
  );

  const { image, subImages, name, rate, price, quantity, reviews } = data.response;

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
                <button onClick={() => handleAddCart(data.response.id, name)} className='button-main text-white bg-secondary hover:bg-secondary/50 flex gap-2 items-center justify-center w-7/10'><span><ShoppingCart /></span> {t('Add to Cart')}</button>
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
              </> : <div className='flex flex-col gap-5'>
                <NotLogged text={t('Add to Cart')} />
                <NotLogged text={<span className='flex gap-2 items-center '>
                  {t('Add to favorites')} <Heart className={favorite ? 'fill-red-500 text-red-500' : ''} />
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


                {Token && (

                  <AlertDialog open={reviewDialogOpen} onOpenChange={setReviewDialogOpen} >

                    <AlertDialogTrigger
                      render={ <button type="button"   className="button-Secondary"  > {t('Write a Review')} </button>  }  />

                    <AlertDialogContent className="data-[size=default]:sm:max-w-xl">

                      <form onSubmit={handleSubmitReview(onSubmitReview)}>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex gap-2 items-center border-b border-primary-bg/60 pb-4 w-full">

                            <div className="bg-[#566f6b3b] p-2 rounded-full">
                              <MessageSquareText className="text-primary-bg" />
                            </div>

                            <div className="flex flex-col items-start gap-0">

                              <span className="text-main font-bold">  {t('Write a Review')} </span>
                              <span className="text-main text-[14px] text-foreground/50"> {t('Share your experience with this product.')} </span>

                            </div>

                          </AlertDialogTitle>
                        </AlertDialogHeader>


                        <div className="flex flex-col gap-5 py-5">
                          <div className="flex flex-col gap-2">

                            <label className="text-main font-semibold">  {t('Rating')} </label>

                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (

                                <button  key={star}type="button" onClick={() =>  setValue('Rating', star, {  shouldValidate: true   }) }   className="cursor-pointer"  >
                                  <Star size={28} className={ star <= selectedRating  ? 'fill-yellow-400 text-yellow-400'  : 'text-gray-300'   }  />
                                </button>

                              ))}

                            </div>

                            {reviewErrors.Rating && (

                              <span className="text-red-500 text-[12px]"> {reviewErrors.Rating.message} </span>

                            )}

                          </div>


                          <div className="flex flex-col gap-2">

                            <label  htmlFor="Comment" className="text-main font-semibold"  >  {t('Your Review')}  </label>

                            <textarea  id="Comment"  rows="5"  {...registerReview('Comment')}  placeholder={t('Write your review here...')} className={`inpotForm resize-none ${reviewErrors.Comment ? 'border-red-500' : ''     }`}  />

                            {reviewErrors.Comment && (

                              <span className="text-red-500 text-[12px]"> {reviewErrors.Comment.message}   </span>

                            )}

                          </div>

                        </div>
                        <AlertDialogFooter>

                          <AlertDialogCancel type="button">
                            {t('Cancel')}
                          </AlertDialogCancel>

                          <button  type="submit"  disabled={isAddingReview} className="button-Secondary py-1 px-3 rounded-lg disabled:opacity-50" >
                            {isAddingReview ? t('Submitting...')   : t('Submit Review') }
                          </button>

                        </AlertDialogFooter>

                      </form>
                    </AlertDialogContent>
                  </AlertDialog>

                ) }

              </div>
              
              <div className='grid gap-y-10  md:grid-cols-2'>

                {reviews.map((review, index) =>
                  <Link key={index} className='border border-primary-addres rounded-lg  overflow-auto shadow-lg py-3.5 px-3 w-8/10 mx-auto flex flex-col justify-between gap-2  hover:scale-110 transition-all duration-300'>
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
