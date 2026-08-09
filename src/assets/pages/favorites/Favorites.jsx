import React from 'react';
import useFavorites from '@/store/useFavorites';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Favorites() {

  const {t} = useTranslation();

  const favorites = useFavorites((state) => state.favorites);
  const removeFavorite = useFavorites(
    (state) => state.removeFavorite
  );

  return (

<main>
  <section className='container py-15'>
    <div className='border-2 border-primary-addres p-4 max-w-4xl mx-auto'>
      <div  className=' border-b border-primary-addres py-3'>
        <h2 className='text-primary-bg'>{t('Favorites List')}</h2>
        </div>
        {favorites.length === 0 ? (
         <div className='flex flex-col gap-3 justify-center items-center py-6' >
          
          <Heart size={180} className='text-primary-bg bg-chart-1 rounded-full p-5'/>
          
          <h3 className='text-main font-black pt-2'>{t('Your favorites list is empty')}</h3>
          <p className='text-main'>{t('There are no products in your favorites list yet. You will find many featured products on the products page.')}</p>
         </div>
       ) :
      <div className='max-h-180 overflow-y-auto '>
         {favorites.map((product) =>(
        <div  key={product.id} className='flex justify-between items-center gap-3  p-3 border border-primary-addres'>
        <div className='w-15'>
          <img src={product.image} alt="product image"  />
        </div>
         <div className='flex flex-col ps-2 text-start  w-9/10 text-primary-bg'>
          <h3>{product.name}</h3>
        <span className='text-[12px]'>{product.price}$</span>
          </div> 
          <div>
             <button onClick={() => removeFavorite(product.id) }> <Heart className="fill-red-500 text-red-500" />
             </button>
             </div>
        </div>
        ))}
      </div> }
      
    </div>
  </section>
</main>

  )
}