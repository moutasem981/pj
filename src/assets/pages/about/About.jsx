import React from 'react'
import { useTranslation } from 'react-i18next'
import heroImg from '@/img/about/hero.png'

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

          <div className='relative w-full md:w-7/10 bg-white'>
            <img src={heroImg} alt={t('About Us')} className='w-full h-full object-cover' />
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
    </main>
  )
}