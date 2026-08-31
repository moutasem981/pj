import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'
import errorbg from './error-bg.svg'

export default function Error() {

    const {t} = useTranslation();

  return (

    <main
      style={{backgroundImage:`url(${errorbg})`}}
      className='min-h-[80vh] bg-cover bg-center flex items-center'
    >

      <section className='container py-15'>

        <div className='max-w-3xl mx-auto flex flex-col items-center text-center'>

          <div className='relative mb-4'>

            <span className='text-[120px] sm:text-[170px] font-black leading-none text-primary-bg/10'> 404 </span>

            <span className='absolute inset-0 flex items-center justify-center text-[70px] sm:text-[100px] font-black text-primary-bg'> 404</span>

          </div>


          <div className='bg-background/90 backdrop-blur-sm border border-primary-bg/20 rounded-3xl shadow-xl/10 p-6 sm:p-10 max-w-2xl'>

            <div className='w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-primary-bg/10'>

              <Home size={26} className='text-primary-bg' />

            </div>

            <h2 className='text-main text-[25px] sm:text-[32px] font-bold mb-3'> {t('Page not Found!!!')} </h2>
            <p className='text-main text-[14px] sm:text-[16px] leading-7 max-w-xl mx-auto'> {t("The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.")} </p>

            <div className='flex justify-center mt-7'>

              <Link to='/'className='button-Secondary px-6 py-3 rounded-xl flex items-center gap-2' >
                <ArrowLeft size={18} />{t('BACK TO HOME')}
              </Link>

            </div>

          </div>

          <span className='mt-5 text-[12px] text-main'> Error Code: 404</span>

        </div>

      </section>

    </main>

  )
}