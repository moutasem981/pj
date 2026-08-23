
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';
import heroImg from '../../../img/home/heroImg.webp'
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { Headset, MoveRight, ShieldCheck, Van } from 'lucide-react';
import Products from '@/assets/components/products/Products';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Categories from '@/assets/components/categories/Categories';
import dealsImg from '@/img/home/deals.webp'
import useTime from '@/assets/hooks/useTime';

export default function Home() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const dir = i18n.dir();


const { data: time } = useTime();

  return (
    <main className='md:relative  z-10 '>
      {/* hero section */}
      <section className='bg-primary-bg md:pt-30 pt-15 pb-10 md:pb-25  '>
        <div className='container flex justify-between items-center flex-wrap md:flex-nowrap '>
          <div className='md:text-start text-center md:mx-0 mx-auto '>
            <div>
              <h1 className=''>{t('Discover Everything You Need')}</h1>
              <p className='text-main text-white/70 md:w-137.5 w-full md:mx-0 mx-auto  '>
                {t('Your search ends here: unlock exclusive savings, experience effortless shopping, and find top-rated items for your')}
                <Typewriter component='span' className='font-bold '
                  options={{
                    strings: [t(' premium tech & gadgets.'), t(' modern fashion & apparel.'), t(' home & living essentials.'), t(' everyday beauty products.')],
                    autoStart: true,
                    loop: true,
                  }}

                />
              </p>
            </div>
            <button onClick={() => navigate('/Products')} className='btn-start mt-8 md:mb-0 mb-4 md:mt-12'>{t('GET STARTED')}</button>
          </div>
          <div className='md:max-w-4/10  '>
            <img className={`md:absolute md:top-40 lg:top-22  mx-auto w-full md:w-4/10 max-w-175  ${i18n.dir() === "rtl" ? "left-0 " : "right-0"}`} src={heroImg} alt="image hero section" />
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
                  <Van size={30} color='#fff' />
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
                  <Headset size={30} color='#fff' />
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

                  <ShieldCheck size={30} color='#fff' />
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


      {/* Latest products */}
      <section className='container flex flex-col gap-10 items-center justify-center overflow-hidden md:pb-20 pb-10  '>
        <h2>{t('Latest Products')}</h2>
        <div className='w-full '>

          <Carousel className='w-full '
            opts={{
              align: "start",
              direction: dir,
            }}
          >
            <CarouselContent className='xl:w-25/100 lg:w-35/100 sm:w-5/10  w-75/100  text-center my-7 mx-2 '>


              <Products number={9} />


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Link to='/Products' className='button-Secondary px-10'>{t('View all products')}</Link>
      </section>



      {/*  Categories section */}
      <section className='container flex flex-col gap-10 items-center justify-center overflow-hidden  '>
        <h2>{t('Categories')}</h2>
        <div className='w-full '>

          <Carousel className='w-full '
            opts={{
              align: "start",
              direction: dir,
            }}
          >
            <CarouselContent className='xl:w-25/100 lg:w-35/100 sm:w-5/10  w-75/100  text-center my-7 mx-2 '>


              <Categories />


            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <Link to='/Products' className='button-Secondary px-10'>{t('View all Categories')}</Link>
      </section>


      {/*  Deals Worth Shopping section */}
      <section className='container md:py-20 py-12'>
        <div className='bg-primary-bg/10 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-120'>
          <div className='md:w-1/2 w-full md:p-14 p-7 flex flex-col justify-center '>

            <div>

              <span className='text-primary-bg text-[13px] font-semibold tracking-[2px]'> {t('LIMITED OFFER')}</span>

              <h2 className='text-secondary mt-3 mb-4'> {t('Deals Worth Shopping')}</h2>
              <p className='text-main max-w-125'>{t('Discover selected products at special prices. Upgrade your everyday essentials while the offer lasts.')}</p>
            </div>

            <div className='flex items-center gap-3 mt-7'>
              <span className='text-main'> {t('UP TO')} </span>
              <span className='text-primary-bg text-[25px] font-bold'>  {t('30% OFF')} </span>
            </div>


            <div className='flex gap-3 mt-7'>
              <div className='bg-background border border-primary-bg/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center'>

                <span className='text-secondary text-[22px] font-bold'> {time?.day}</span>

                <span className='text-main text-[12px]'> {t('Day')} </span>
              </div>
              <div className='bg-background border border-primary-bg/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center'>

                <span className='text-secondary text-[22px] font-bold'> {time?.hour}  </span>
                <span className='text-main text-[12px]'>  {t('Hours')} </span>

              </div>
              <div className='bg-background border border-primary-bg/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center '>

                <span className='text-secondary text-[22px] font-bold'>  {time?.minute} </span>
                <span className='text-main text-[12px]'>{t('Minutes')} </span>

              </div>

            </div>


            <button onClick={() => navigate('/Products')} className='button-Secondary mt-8 flex gap-3 items-center justify-center  w-full' > {t('Shop the offer')}<MoveRight size={18} />  </button>

          </div>


          <div className='md:w-1/2 w-full min-h-85 md:min-h-full relative overflow-hidden'>

            <img src={dealsImg} alt="Deals Worth Shopping" className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-all duration-700' />


            <div className='absolute top-5 end-5 bg-primary-bg text-white w-22 h-22 rounded-full flex flex-col items-center justify-center border-4 border-white/30'>

              <span className='text-[12px]'> {t('Save')} </span>

              <span className='text-[22px] font-bold'>  30% </span>

            </div>

          </div>

        </div>

      </section>






    </main>


  )
}
