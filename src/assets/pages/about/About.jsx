import React from 'react'
import { useTranslation } from 'react-i18next'
import heroImg from '@/img/about/hero.png'
import missionImg from '@/img/about/mission.webp'
import ourTeamImg from '@/img/about/our-team.png'
import ourTeam2Img from '@/img/about/our-team2.png'
import ourTeam3Img from '@/img/about/our-team3.png'
import academicsImg from '@/img/about/cademics.svg'
import juneirahImg from '@/img/about/juneirah.svg'
import megaImg from '@/img/about/mega.svg'
import clientImg from '@/img/about/client-earth.svg'
import biotechneImg from '@/img/about/biotechne.svg'
import UseProductsdetails from '@/assets/hooks/UseProductsdetails'
import Stars from '@/assets/components/Stars/Stars'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function About() {

  const { t } = useTranslation();

  const { data, isLoading } = UseProductsdetails(14);
  console.log(data);

  return (
    <main>
      {/* hero section */}
      <section className='relative overflow-hidden'>
        <div className='flex max-md:flex-col'>

          <div className='relative bg-primary-bg md:w-3/10 w-full min-h-90 md:min-h-120 flex items-center justify-center overflow-hidden'>

            <div className='absolute inset-0'>
              <div className='absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-70 h-70 border-[35px] border-white/8 rotate-45'></div>
              <div className='absolute top-0 start-0 w-40 h-40 bg-white/6 rotate-45 -translate-x-1/2 -translate-y-1/2'></div>
            </div>

            <h1>{t('About Us')}</h1>
          </div>

          <div className='relative max-md:mx-auto w-screen   md:w-7/10 bg-white'>
            <img src={heroImg} alt={t('About Us')} className='w-screen h-full min-h-50 object-cover' />
          </div>
        </div>


        <div className='container'>
          <div className='relative -mt-16 md:-mt-22 flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-10 pb-14'>

            <div className='bg-background rounded-full shadow-xl/20 w-42 h-42 md:w-48 md:h-48 flex flex-col items-center justify-center text-center border border-primary-bg/10'>
              <span className='text-secondary text-[26px] md:text-[30px] font-bold'>379</span>
              <span className='text-primary-bg text-[13px] font-bold mt-2 leading-5'>{t('Total')}<br />{t('Success Stories')}</span>
            </div>

            <div className='bg-background rounded-full shadow-xl/20 w-42 h-42 md:w-48 md:h-48 flex flex-col items-center justify-center text-center border border-primary-bg/10'>
              <span className='text-secondary text-[26px] md:text-[30px] font-bold'>$508,021</span>
              <span className='text-primary-bg text-[13px] font-bold mt-2 leading-5'>{t('Product Sales')}<br />{t('Since 2021')} </span>
            </div>

            <div className='bg-background rounded-full shadow-xl/20 w-42 h-42 md:w-48 md:h-48 flex flex-col items-center justify-center text-center border border-primary-bg/10'>
              <span className='text-secondary text-[26px] md:text-[30px] font-bold'>94 %</span>
              <span className='text-primary-bg text-[13px] font-bold mt-2 leading-5'> {t('Membership Increase')}<br />{t('Since 2022')}</span>
            </div>

          </div>
        </div>
      </section>

      {/* Our Mission And Vision section */}
      <section className=' mt-5 md:mt-20 py-10 lg:py-25 bg-primary-bg container min-h-112.5'>

        <div className='grid md:grid-cols-2 gap-10 justify-center items-center  relative'>
          <div className='md:w-5/10'>
            <img src={missionImg} alt={t('Our Mission And Vision')} className=' lg:absolute md:max-lg:max-w-87 max-md:mx-auto  -bottom-10/10  lg:-top-10/10' />
          </div>
          <div >
            <span className='text-primary-addres text-[13px] font-semibold tracking-[2px]'> {t('CORE VALUE COMPANY')} </span>
            <h2 className='text-white mt-3 mb-5'>{t('Our Mission And Vision')}</h2>
            <p className='text-primary-addres text-main'>{t("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, buying to injected humour, or randomised words which don't look even many desktop publishing packages.")} </p>
          </div>

        </div>

      </section>

      {/* Our Team section */}
      <section className=' py-10 lg:py-30 text-center'>

        <h2 className='text-primary-bg mb-10'>{t('Our Team')}</h2>


        <div className='flex gap-25 max-xl:flex-wrap justify-center items-center'>

          <div className='relative'>
            <img src={ourTeamImg} alt="our team images" />
            <div className='w-[288px]   pt-10 border-t-10 border-primary-bg absolute bg-background left-7.25 -bottom-1/9'>
              <h3 className='text-main text-primary-bg font-bold'>{t('Chili Mili')}</h3>
              <span className='text-main text-primary-bg '>{t('CEO & Founder')}</span>
            </div>
          </div>
          <div className='relative'>
            <img src={ourTeam2Img} alt="our team images" />
            <div className='w-[288px]   pt-10 border-t-10 border-primary-bg absolute bg-background left-7.25 -bottom-1/9'>
              <h3 className='text-main text-primary-bg font-bold'>{t('Emma Watson')}</h3>
              <span className='text-main text-primary-bg '>{t('CMO')}</span>
            </div>
          </div>
          <div className='relative'>
            <img src={ourTeam3Img} alt="our team images" />
            <div className='w-[288px]   pt-10 border-t-10 border-primary-bg absolute bg-background left-7.25 -bottom-1/9'>
              <h3 className='text-main text-primary-bg font-bold'>{t('James William')}</h3>
              <span className='text-main text-primary-bg '>{t('COO')}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Our Partnership section */}
      <section className='py-15 container text-center'>
        <h2 className='text-primary-bg mb-6.5'>{t('Our Partnership and Collabratiors')}</h2>
        <div className='flex gap-x-18 gap-y-8 max-xl:flex-wrap justify-center items-center'>

          <img src={academicsImg} alt="Our Partnership logo" />
          <img src={juneirahImg} alt="Our Partnership logo" />
          <img src={megaImg} alt="Our Partnership logo" />
          <img src={clientImg} alt="Our Partnership logo" />
          <img src={biotechneImg} alt="Our Partnership logo" />


        </div>
      </section>

      {/* Happy customers section */}
      <section className='container'>
        <div className=' max-w-7/10 lg:max-w-4/10 text-center mx-auto'>
          <h2 className='text-primary-bg'>{t('Trusted by Thousands of Happy Customers')}</h2>
          <p className='text-main mt-4.5 mb-18'>{t('Discover what our customers say about their shopping experience and why they keep coming back.')}</p>
        </div>
        <div dir="auto">
          <Carousel
            opts={{
              align: "start",
            }}
          >
            <CarouselContent className="-ms-4 py-6">
              {data?.response?.reviews.map((review) => (
                <CarouselItem key={review.id} className="ps-4 basis-full sm:basis-1/2 lg:basis-1/3 ">
                  <div className="rounded-2xl border-4 border-primary-addres  shadow-lg px-6 py-5 h-full flex flex-col">
                    <div className="flex items-center justify-between ">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11  capitalize bg-primary-bg text-amber-50 flex items-center justify-center rounded-full border-2 border-primary-addres overflow-hidden">
                            {review.userName[0]}
                        </div>
                        <div>
                          <h3 className="text-main font-bold">{review.userName}</h3>
                          <span className="text-main text-xs">{review.createdAt}</span>
                        </div>
                      </div>

                      <div className='overflow-hidden'>
                        <Stars rate={review.rating} />
                      </div>
                    </div>

                    <p className="mt-3 text-main text-sm">{review.comment}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center justify-end gap-3 mt-6">
              <CarouselPrevious className="static translate-y-0 rtl:rotate-180 rounded-full w-11 h-11 border-2" />
              <CarouselNext className="static translate-y-0 rtl:rotate-180 rounded-full w-11 h-11 bg-primary-bg text-white hover:bg-primary-bg/90 border-none" />
            </div>
          </Carousel>
        </div>
      </section>


    </main>
  )
}