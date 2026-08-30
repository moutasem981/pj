
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
import techImg from '@/img/home/Tech_Essentials.webp'
import styleImg from '@/img/home/Everyday_Style.webp'
import homeImg from '@/img/home/Home_Living.webp'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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


      {/*  Deals Worth Shopping section */}
      <section className='container  py-12'>
        <div className='bg-primary-bg/10 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-120'>
          <div className='md:w-1/2 w-full md:p-14 p-7 flex flex-col justify-center '>

            <div>

              <span className='text-primary-bg text-[13px] font-semibold tracking-[2px]'> {t('LIMITED OFFER')}</span>

              <h2 className='text-main mt-3 mb-4'> {t('Deals Worth Shopping')}</h2>
              <p className='text-main max-w-125'>{t('Discover selected products at special prices. Upgrade your everyday essentials while the offer lasts.')}</p>
            </div>

            <div className='flex items-center gap-3 mt-7'>
              <span className='text-main'> {t('UP TO')} </span>
              <span className='text-primary-bg text-[25px] font-bold'>  {t('30% OFF')} </span>
            </div>


            <div className='flex gap-3 mt-7'>
              <div className='bg-background border border-primary-bg/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center'>

                <span className='text-main text-[22px] font-bold'> {time?.day}</span>

                <span className='text-main text-[12px]'> {t('Day')} </span>
              </div>
              <div className='bg-background border border-primary-bg/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center'>

                <span className='text-main text-[22px] font-bold'> {time?.hour}  </span>
                <span className='text-main text-[12px]'>  {t('Hours')} </span>

              </div>
              <div className='bg-background border border-primary-bg/20 rounded-xl w-20 h-20 flex flex-col items-center justify-center '>

                <span className='text-main text-[22px] font-bold'>  {time?.minute} </span>
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



      {/*  Categories section */}
      <section className='container flex flex-col gap-10 items-center justify-center overflow-hidden py-4 '>
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


     

      {/* Explore Collections section */}
      <section className='container md:py-12 py-8'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10'>
          <div>

            <span className='text-primary-bg text-[13px] font-semibold'>{t('SHOP YOUR WAY')} </span>
            <h2 className='text-primary-bg mt-3'>{t('Explore Collections')}</h2>
          </div>

          <p className='text-main max-w-110'> {t('Find what fits your everyday needs from our most popular shopping collections.')} </p>

        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

          <div onClick={() => navigate('/Products')} className='relative h-100 rounded-2xl overflow-hidden cursor-pointer group'>

            <img src={techImg} alt="Tech Essentials" className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />

            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 '></div>
            <div className='absolute bottom-0 p-7 text-white'>

              <span className='text-[12px] tracking-[1px]'> {t('FEATURED COLLECTION')} </span>

              <h3 className='text-[25px] font-semibold mt-2'> {t('Tech Essentials')} </h3>

              <div className='flex items-center gap-2 mt-3 text-[14px] font-medium'>

                <span>{t('Explore collection')}</span>

                <MoveRight size={18} className='group-hover:translate-x-2 transition-all' />

              </div>

            </div>

          </div>

          <div onClick={() => navigate('/Products')} className='relative h-100 rounded-2xl overflow-hidden cursor-pointer group' >

            <img src={styleImg} alt="Everyday Style" className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />

            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 '></div>


            <div className='absolute bottom-0 p-7 text-white'>
              <span className='text-[12px] tracking-[1px]'> {t('NEW SEASON')}</span>

              <h3 className='text-[25px] font-semibold mt-2'> {t('Everyday Style')}</h3>

              <div className='flex items-center gap-2 mt-3 text-[14px] font-medium'>

                <span>{t('Shop now')}</span>

                <MoveRight size={18} className='group-hover:translate-x-2 transition-all' />

              </div>

            </div>

          </div>


          <div onClick={() => navigate('/Products')} className='relative h-100 rounded-2xl overflow-hidden cursor-pointer group md:col-span-2 lg:col-span-1' >

            <img src={homeImg} alt="Home & Living" className='w-full h-full object-cover group-hover:scale-105 transition-all duration-500' />

            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 '></div>


            <div className='absolute bottom-0 p-7 text-white'>

              <span className='text-[12px] tracking-[1px]'> {t('MAKE IT YOURS')} </span>

              <h3 className='text-[25px] font-semibold mt-2'> {t('Home & Living')}  </h3>

              <div className='flex items-center gap-2 mt-3 text-[14px] font-medium'>

                <span>{t('Shop now')}</span>

                <MoveRight size={18} className='group-hover:translate-x-2 transition-all' />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Great finds section */}
      <section className='container  py-12'>

        <div className='flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10'>

          <div>

            <span className='text-main text-[13px] '>{t('FIND YOUR RANGE')}</span>

            <h2 className='text-primary-bg mt-3 max-w-120'> {t('Great finds for every budget.')}</h2>

          </div>

          <p className='text-main max-w-110 '>{t( "Whether you're looking for everyday essentials or something a little more special, start with the range that works for you.")}</p>

        </div>

        <div className='grid lg:grid-cols-3 border-y border-primary-bg/20'>

          <div onClick={() => navigate('/Products')} className='group relative min-h-105 md:min-h-110 py-10 px-7 md:px-9 overflow-hidden cursor-pointer border-b lg:border-b-0 lg:border-e border-primary-bg/20'>

            <div className='absolute inset-0 bg-primary-bg/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500'></div>


            <div className='relative z-10 h-full flex flex-col'>

              <span className='text-main text-[11px] '> 01 / {t('SMART PICKS')} </span>

              <div className='mt-15'>
                <span className='text-primary-bg text-[11px] font-semibold'>{t('START SMALL')} </span>

                <h3 className='text-main text-[32px] font-semibold mt-2'> {t('Under $50')}</h3>

                <p className='text-main text-[13px] max-w-65 mt-3'> {t('Useful everyday products without stretching your budget.')} </p>

              </div>

              <div className='mt-auto flex items-center justify-between pt-10'>
                <span className='text-main text-[13px] font-semibold'> {t('Shop under $50')}</span>

                <div className='w-10 h-10 rounded-full border border-primary-bg/30 flex items-center justify-center text-primary-bg group-hover:bg-primary-bg group-hover:text-white group-hover:-rotate-35 transition-all duration-300'>
                  <MoveRight size={17} />
                </div>

              </div>

            </div>

          </div>

          <div onClick={() => navigate('/Products')} className='group relative min-h-105 md:min-h-110 py-10 px-7 md:px-9 overflow-hidden cursor-pointer bg-primary-bg text-white border-b lg:border-b-0 lg:border-e border-white/15'>

            <div className='absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500'></div>

            <span className='absolute top-7 end-7 z-20 border border-white/30 px-3 py-2 text-[9px] '>{t('MOST POPULAR')} </span>

            <div className='relative z-10 h-full flex flex-col'>
              <span className='text-white/55 text-[11px] '>02 / {t('BEST VALUE')} </span>

              <div className='mt-15'>

                <span className='text-white/65 text-[11px] font-semibold tracking-[1.5px]'>{t('THE SWEET SPOT')} </span>

                <h3 className='text-white text-[32px] font-semibold mt-2'> $50 — $150 </h3>

                <p className='text-white/70 text-[13px] leading-6 max-w-65 mt-3'>{t('A balanced selection of quality products at prices that make sense.')}</p>

              </div>

              <div className='mt-auto flex items-center justify-between pt-10'>
                <span className='text-white text-[13px] font-semibold'> {t('Explore the range')}</span>

                <div className='w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-primary-bg group-hover:-rotate-35 transition-all duration-300'>
                  <MoveRight size={17} />
                </div>

              </div>

            </div>

          </div>

          <div onClick={() => navigate('/Products')} className='group relative min-h-105 md:min-h-110 py-10 px-7 md:px-9 overflow-hidden cursor-pointer'>

            <div className='absolute inset-0 bg-primary-bg/8 translate-y-full group-hover:translate-y-0 transition-transform duration-500'></div>

            <div className='relative z-10 h-full flex flex-col'>

              <span className='text-main text-[11px] '> 03 / {t('PREMIUM')}</span>

              <div className='mt-15'>
                <span className='text-primary-bg text-[11px] font-semibold '> {t('SOMETHING SPECIAL')} </span>

                <h3 className='text-main text-[32px] font-semibold mt-2'> $150+</h3>

                <p className='text-main text-[13px] leading-6 max-w-65 mt-3'>{t("Discover premium choices when you're looking for something above the ordinary.")} </p>

              </div>


              <div className='mt-auto flex items-center justify-between pt-10'>

                <span className='text-main text-[13px] font-semibold'>{t('View premium picks')} </span>
                <div className='w-10 h-10 rounded-full border border-primary-bg/30 flex items-center justify-center text-primary-bg group-hover:bg-primary-bg group-hover:text-white group-hover:-rotate-35 transition-all duration-300'>
                  <MoveRight size={17} />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-7'>

          <p className='text-main text-[12px]'>{t('Prices and availability may vary by product.')} </p>

          <button onClick={() => navigate('/Products')} className=' group flex items-center gap-2 text-primary-bg text-[13px] font-semibold ' >
            {t('Browse all products')}
            <MoveRight size={16} className=' group-hover:translate-x-1 transition-all' />
          </button>

        </div>

      </section>


      {/* FAQ section */}
      <section className='md:py-20 py-12 bg-primary-bg/5'>
        <div className='container'>
          <div className='grid lg:grid-cols-2 md:gap-20 gap-10'>
            <div>

              <span className='text-main font-semibold text-[13px]'>{t('NEED SOME HELP?')}</span>
              <h2 className='text-primary-bg mt-3 '>  {t('Frequently Asked Questions')} </h2>
              <p className='text-main mt-4 max-w-105'> {t('Find quick answers to the most common questions about shipping, returns, payments and support.')}</p>

              <div className='mt-8 pt-7 border-t border-primary-bg/20'>
                <span className='text-main text-[13px]'> {t("Still have a question?")} </span>

                <button onClick={() => navigate('/Faq')} className='mt-3 flex items-center gap-2 text-primary-bg font-semibold text-[14px] group' >
                  {t('View all questions')}
                  <MoveRight size={17} className='group-hover:translate-x-1 transition-all' />
                </button>

              </div>

              <div className='flex flex-wrap gap-x-7 gap-y-3 mt-10'>

                <div className='flex items-center gap-2 text-main text-[12px]'>
                  <span className='w-2 h-2 rounded-full bg-primary-bg'></span>
                  <span>{t('Fast support')} </span>
                </div>

                <div className='flex items-center gap-2 text-main text-[12px]'>
                  <span className='w-2 h-2 rounded-full bg-primary-bg'></span>
                  <span> {t('Easy returns')} </span>
                </div>

                <div className='flex items-center gap-2 text-main text-[12px]'>
                  <span className='w-2 h-2 rounded-full bg-primary-bg'></span>
                  <span> {t('Secure shopping')} </span>
                </div>
              </div>

            </div>

            <div className='bg-background md:px-8 px-5 border border-primary-bg/15 '>

              <Accordion type='single' defaultValue='shipping' className='w-full '  >

                <AccordionItem value='shipping'>

                  <AccordionTrigger className='text-main text-[16px] py-6 hover:no-underline'>

                    <div className='flex items-center gap-4 text-start'>

                      <span className='text-primary-bg/50 text-[11px]'>  01 </span>

                      <span> {t('What are your shipping options?')} </span>

                    </div>

                  </AccordionTrigger>

                  <AccordionContent className='text-main leading-7 ps-9 pb-6'>
                    <p> {t('We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping is available on eligible orders.')} </p>
                  </AccordionContent>

                </AccordionItem>

                <AccordionItem value='returns'>

                  <AccordionTrigger className='text-main text-[16px] py-6 hover:no-underline'>

                    <div className='flex items-center gap-4 text-start'>

                      <span className='text-primary-bg/50 text-[11px]'> 02  </span>

                      <span>{t('What is your return policy?')} </span>

                    </div>

                  </AccordionTrigger>

                  <AccordionContent className='text-main leading-7 ps-9 pb-6'>

                    <p> {t('Returns are accepted within 30 days. Items must be unused and in their original packaging. Refunds are usually processed within 5-7 business days.')}</p>

                  </AccordionContent>

                </AccordionItem>

                <AccordionItem value='support'>

                  <AccordionTrigger className='text-main text-[16px] py-6 hover:no-underline'>

                    <div className='flex items-center gap-4 text-start'>

                      <span className='text-primary-bg/50 text-[11px]'> 03 </span>

                      <span>{t('How can I contact customer support?')} </span>

                    </div>

                  </AccordionTrigger>

                  <AccordionContent className='text-main leading-7 ps-9 pb-6'>

                    <p>{t('You can contact our customer support team through the Contact Us page. We will be happy to help you with any questions or issues.')}</p>

                  </AccordionContent>

                </AccordionItem>

                <AccordionItem value='payment'>

                  <AccordionTrigger className='text-main text-[16px] py-6 hover:no-underline'>

                    <div className='flex items-center gap-4 text-start'>

                      <span className='text-primary-bg/50 text-[11px]'>  04 </span>

                    <span>  {t('What payment methods do you accept?')} </span>

                    </div>

                  </AccordionTrigger>

                  <AccordionContent className='text-main leading-7 ps-9 pb-6'>

                  <p>  {t(  'We accept the available payment methods shown during checkout. You can choose your preferred payment method before confirming your order.' )} </p>

                  </AccordionContent>

                </AccordionItem>

              </Accordion>

            </div>

          </div>

        </div>

      </section>


    </main>


  )
}
