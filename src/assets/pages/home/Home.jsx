
import React from 'react'
import Typewriter from 'typewriter-effect';
import heroImg from '../../../img/home/heroImg.webp'
import { useTranslation } from 'react-i18next';
import i18n from '@/i18next';
import { useNavigate } from 'react-router-dom';

export default function Home() {

const {t} = useTranslation();
const navigate = useNavigate();

  return (
      <>
     {/* hero section */}
       <section className='bg-primary-bg md:pt-30 pt-15 pb-10 md:pb-25 md:relative  z-10  '>
        <div className='container flex justify-between items-center flex-wrap md:flex-nowrap '>
          <div className='md:text-start text-center md:mx-0 mx-auto '>
            <div>
            <h1 className=''>{t('Discover Everything You Need')}</h1>
            <p className='text-main text-white/70  w-7/10 md:mx-0 mx-auto  '>
            {t('Your search ends here: unlock exclusive savings, experience effortless shopping, and find top-rated items for your')} :
           <Typewriter component='div' className='font-bold '
             options={{
                  strings: [t('premium tech & gadgets.'), t('modern fashion & apparel.') , t('home & living essentials.') , t('everyday beauty products.')],
                  autoStart: true,
                 loop: true,
                     }}
            
            />
            </p>
            </div>
            <button onClick={()=> navigate('/Products')} className='btn-start mt-8 md:mb-0 mb-4 md:mt-12'>{t('GET STARTED')}</button>
          </div>
          <div className='md:max-w-4/10  '>
            <img className={`md:absolute md:top-40 lg:top-22  mx-auto w-8/10 md:w-4/10 ${i18n.dir() === "rtl" ? "left-0 " : "right-0"}`}  src={heroImg} alt="image hero section"  /> 
          </div>
        </div>
       </section>
       <section className='h-[600px]'>
       </section>

      </>
    

  )
}
