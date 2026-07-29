import { Button } from '@/components/ui/button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import instagramIcon from '../../../img/footer/insta.svg';
import facebookIcon from '../../../img/footer/facebook.svg';
import linkedIcon from '../../../img/footer/linked-in.svg';
import logo from "../../../img/logo/Faher-white.svg";
import iconِِApple from "../../../img/footer/iconapple.svg";
import iconPlayStore from "../../../img/footer/iconPlayStore.svg";

import { Link } from 'react-router-dom';







export default function Footer() {






  const {t} =useTranslation();

  return (
    <>
      <footer className=' text-primary-addres'>
        <div className=' bg-secondary'>
        <div className='container'>
          <div className='flex items-center flex-wrap sm:flex-nowrap  justify-between py-6 md:py-12 gap-3'>
        <div className='gap-2'>
          <span className='text-side text-[16px] md:text-[20px]'>{t('Join our our story')}</span>
          <p className='text-side'>{t('We’ll send you a nice letter once per week. No spam.')}</p>
        </div>
        <div>
          <form className='  flex gap-x-4 gap-y-2 items-center justify-between sm:flex-nowrap flex-wrap'>      
                <input className=' focus:outline-none rounded-full md:w-70 text-[14px] font-normal text-primary-bg py-2 px-3.5 font-button bg-white border-0' type="text" placeholder={t('Enter your email')} />
                <Button className=' rounded-full py-4.5 px-4.5  text-white bg-[#00616B] button-main  ' variant="outline"  >{t('Subscribe')}</Button>
              </form>
        </div>
        </div>
        </div></div>
      <div className=' bg-primary-bg'>
        <div className='container '>
            <div class="flex flex-col sm:flex-row justify-between items-center pt-6 gap-6 pb-11.25 md:pb-23 ">
                <div>
                    <Link to="/"> <img src={logo} alt="logo to Faher "  /></Link>
                </div>
                <div class="flex gap-6 sm:gap-3 ">
                    <a href="https://www.instagram.com/moutasem112" target="_blank">
                        <img src={instagramIcon} alt="Instagram logo image"
                            class="duration-400 hover:scale-125"/>
                    </a>
                    <a href="https://www.facebook.com/moutasem112" target="_blank">
                        <img src={facebookIcon} alt="Facebook logo image"
                            class="duration-400 hover:scale-125"/>
                    </a>
                    <a href="https://www.linkedin.com/in/moutasem-hassan-75b119387/" target="_blank">
                        <img src={linkedIcon} alt="LinkedIn logo image"
                            class="duration-400 hover:scale-125"/>
                    </a>

                </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-between items-center gap-y-14">
                <div class="w-full lg:w-auto">
                    <div class="pb-7.75 border-b">
                        <span class="text-side ">{t('Menu')}</span>
                    </div>
                    <div class="pt-7.75 flex gap-28.75 text-sm tracking-[1.4px] leading-4 font-normal uppercase">
                        <div class="flex flex-col gap-4 md:gap-4.5">
                            <Link to='/' class="active:underline duration-400 hover:scale-125">{t('Home')}</Link>
                            <Link to='/About' class="active:underline duration-400 hover:scale-125">{t('About')}</Link>
                            <Link to='/About' class="active:underline duration-400 hover:scale-125">{t('Products')}</Link>
                        </div>
                        <div class="flex flex-col gap-4 md:gap-4.5">
                            <Link to='/About' class="active:underline duration-400 hover:scale-125">{t('Contact us')}</Link>
                          <Link to='/About' class="active:underline duration-400 hover:scale-125">{t('Our Team')}</Link>
                           <Link to='/Products' class="active:underline duration-400 hover:scale-125">{t('Shop Now')}</Link>
                        </div>
                    </div>

                </div>
                <div>
                    <div class="py-11 ps-8.5 pe-8.5 md:pe-13.75 bg-amber-50/10 rounded-[40px] max-w-127.25">
                        <div>
                            <span class="text-side pe-32">{t('Download our Application')}</span>
                            <p class=" pe-14  mt-4.5 md:mt-3">{t('Download the app now to get offers ranging from 20% to 60% off.')} </p>
                        </div>
                        <div class="flex gap-4 flex-col lg:flex-row mt-4.5 md:mt-6 ">
                            <button   class="button-main  text-white bg-secondary hover:bg-secondary/50  py-5.25 flex gap-2 w-full items-center justify-center"><img src={iconِِApple} alt="apple logo image" />{t('App Store')}</button>
                            <button   class=" button-main text-white bg-secondary hover:bg-secondary/50  py-5.25 flex gap-2 w-full items-center justify-center"> <img src={iconPlayStore} alt="PLAY STORE logo image" /> {t('PLAY STORE')}</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="mt-8 md:mt-16  pt-6 pb-6 flex justify-between gap-6   border-t border-amber-50/30 sm:flex-nwrap flex-wrap">
            <div className='flex flex-col items-start md:text-[16px] text-[12px]'>
              <span>{t('Addres: Al-Bayader Street, Talfit, south of Nablus')}</span>
              <span>{t('Telephone')}: +970 594 547 679</span>
              <span>{t('Email')}: emadmoutasem0@gmail.com</span>
            </div>
            <div className='w-screen text-center'><span class="md:text-[16px] text-[12px]  leading-6.5 font-light">{t('All rights reserved by faher © 2026')}</span></div>
                

            </div>
        </div>
        </div>
      
      </footer>
    </>
  )
}
