
import React from 'react'
import Typewriter from 'typewriter-effect';
import heroImg from '../../../img/home/heroImg.webp'
import { useTranslation } from 'react-i18next';
import i18n from '@/i18next';
import { useNavigate } from 'react-router-dom';
import { Headset, ShieldCheck, Van } from 'lucide-react';

export default function Home() {

const {t} = useTranslation();
const navigate = useNavigate();

  return (
      <main className='md:relative  z-10 '>
     {/* hero section */}
       <section className='bg-primary-bg md:pt-30 pt-15 pb-10 md:pb-25  '>
        <div className='container flex justify-between items-center flex-wrap md:flex-nowrap '>
          <div className='md:text-start text-center md:mx-0 mx-auto '>
            <div>
            <h1 className=''>{t('Discover Everything You Need')}</h1>
            <p className='text-main text-white/70 md:w-137.5 w-full md:mx-0 mx-auto  '>
            {t('Your search ends here: unlock exclusive savings, experience effortless shopping, and find top-rated items for your') } 
           <Typewriter component='span' className='font-bold '
             options={{
                  strings: [t(' premium tech & gadgets.'), t(' modern fashion & apparel.') , t(' home & living essentials.') , t(' everyday beauty products.')],
                  autoStart: true,
                 loop: true,
                     }}
            
            />
            </p>
            </div>
            <button onClick={()=> navigate('/Products')} className='btn-start mt-8 md:mb-0 mb-4 md:mt-12'>{t('GET STARTED')}</button>
          </div>
          <div className='md:max-w-4/10  '>
            <img className={`md:absolute md:top-40 lg:top-22  mx-auto w-full md:w-4/10 max-w-175  ${i18n.dir() === "rtl" ? "left-0 " : "right-0"}`}  src={heroImg} alt="image hero section"  /> 
          </div>
        </div>
       </section>


         {/* Features section */}
       <section className='text-center md:pt-18 md:pb-25 py-15'>
        <h2 className=' mb-14'>{t('Features')}</h2>
        <div className='container flex justify-center gap-10 items-center flex-wrap lg:flex-nowrap '>
        <div className='feature'>
          <div className='flex'>
            <div className='bg-primary-bg/30 p-3 rounded-full'>
            <div className='bg-primary-bg p-2 rounded-full'>
              <Van size={30}  color='#fff'/>
            </div>
            </div>
            </div>
          <div>
            <h3 className='text-main font-bold'>{t('FREE AND FAST DELIVERY')}</h3>
            <span className='text-main text-[14px]'>{t('Free delivery for all orders over $140')}</span>

          </div>
        </div>
        <div className='feature'>
          <div className='flex'>
            <div className='bg-primary-bg/30 p-3 rounded-full'>
            <div className='bg-primary-bg p-2 rounded-full'>
              <Headset size={30}  color='#fff'/>
            </div>
            </div>
            </div>
          <div>
            <h3 className='text-main font-bold'>{t('24/7 CUSTOMER SERVICE')}</h3>
            <span className='text-main text-[14px]'>{t('Friendly 24/7 customer support')}</span>

          </div>
        </div>
        <div className='feature'>
          <div className='flex'>
            <div className='bg-primary-bg/30 p-3 rounded-full'>
            <div className='bg-primary-bg p-2 rounded-full'>
        
              <ShieldCheck size={30}  color='#fff'/>
            </div>
            </div>
            </div>
          <div>
            <h3 className='text-main font-bold'>{t('MONEY BACK GUARANTEE')}</h3>
            <span className='text-main text-[14px]'>{t('We return money within 30 days')}</span>

          </div>
        </div>
        </div>
       </section>

      </main>
    

  )
}
