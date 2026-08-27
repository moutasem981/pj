import React from 'react'
import { useTranslation } from 'react-i18next'
import heroImg from '@/img/about/hero.png'
import missionImg from '@/img/about/mission.webp'

export default function About() {
  const { t } = useTranslation();

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
            <img src={heroImg} alt={t('About Us')} className='w-screen h-full object-cover' />
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
    </main>
  )
}