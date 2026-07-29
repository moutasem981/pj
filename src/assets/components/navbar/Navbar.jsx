import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../../store/useAuthStore'
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18next';
import logo from "../../../img/logo/Faher.svg"
import { Heart, House, Info, Languages, LogIn, MessageCircleQuestionMark, Moon, Search, ShoppingCart, Sun, TextAlignJustify, User } from 'lucide-react';
import {

  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"

export default function Navbar() {

  const Token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLng = i18n.language === "ar" ? "en" : "ar"
    i18n.changeLanguage(newLng);
  }

  const handlelogout = () => {
    Logout(),
      navigate('/login')
  }

  return (

    <>
      <div className='bg-primary-bg text-main text-primary-addres md:text-[12px] '>
        <div className='container flex justify-center md:justify-between items-center py-3'>
          <div></div>
          <div className=' flex gap-2 flex-wrap'>
            <p>{t('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!')}</p>
            <Link to='/Products' className='underline '>{t('ShopNow')}</Link>
          </div>
          <div className='hidden md:flex gap-4 items-center'>
            <Link className='flex gap-2 items-center ' onClick={changeLanguage}><Languages size={14} color='#C6C6C6' />
              {i18n.language === "ar" ? "English" : "العربية"}</Link>
            <Link className='flex gap-2 items-center '>
              {i18n.language === "cd" ?  <Sun  /> : <Moon  />}</Link>
          </div>
        </div>
      </div>
      <nav className='border-b shadow sticky w-full top-0 bg-background pt-7 pb-5.5'>
        <div className='container flex justify-between   mx-auto z-40 items-center '>
          <div className='block md:hidden'>
             <Sheet>
          <SheetTrigger render={<Link>
            <TextAlignJustify color='#566F6B' /> </Link>} />
          <SheetContent side={i18n.dir() === "rtl" ? "right" : "left"} className='bg-primary-bg text-white'>
            <SheetHeader className='px-0'>
              <SheetTitle className='mt-6'> <form className='bg-primary-addres mx-2 rounded-lg flex items-center justify-between '>
                <button className='py-2.5 px-3.5'><Search color='#566F6B' size={20} /></button>
                <input className='w-[90%] focus:outline-none border-0' type="text" placeholder={t('Search for a product')} />
              </form></SheetTitle>
             {Token &&(<SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' to='/'><User color='#fff' />
              {t('My profile')}   </Link></SheetClose>)} 
              <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' to='/'><House color='#fff' />
                {t('Home')}</Link></SheetClose>
                <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' to='/Products'><ShoppingCart color='#fff' />
                 {t('Products')}</Link></SheetClose>
              <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' to='/About'><Info color='#fff' />
                {t('About')}</Link></SheetClose>
              
              <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' to='/Contact us'><MessageCircleQuestionMark color='#fff' />
                 {t('Contact us')}</Link></SheetClose>
              <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' onClick={changeLanguage}><Languages color='#fff' />
                
              {i18n.language === "ar" ? "English" : "العربية"}</Link></SheetClose>
              <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200' >
              {i18n.language === "cd" ? <span className='flex gap-3 items-center'> <Sun  />  {t('Light mode')} </span>: <span className='flex gap-3 items-center'> <Moon  /> {t('Dark mode')}  </span>}</Link></SheetClose>
              
             {Token ? <>
             <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200 border-t-2' to='/Login' onClick={handlelogout}> <LogOutIcon color='#fff' />
                {t('Sign Out')}</Link></SheetClose>

             </>:
             <>
             <SheetClose><Link className='flex gap-3 items-center py-4 px-3 text-[20px] w-full  hover:bg-black/30 transition delay-200 border-t-2' to='/Register'> <LogIn color='#fff' />
                 {t('Sign up')}</Link> </SheetClose>
             </>} 
            </SheetHeader>
          </SheetContent>
        </Sheet>
            
          </div>
          <div><img src={logo} /></div>
          <div className='lg:w-[45%] sm:w-[30%] hidden sm:block'>

            <form className='bg-primary-addres rounded-lg flex items-center justify-between '>
              <button className='py-2.5 px-3.5'><Search color='#566F6B' size={20} /></button>
              <input className='w-[90%] focus:outline-none border-0' type="text" placeholder={t('Search for a product')} />
            </form>
          </div>
          <div className='hidden md:flex gap-4 items-center text-main text-[14px]  '>
            <Link className='lists-nav' to='/'> {t('Home')}</Link>
            <Link className='lists-nav' to='/About'> {t('About')}</Link>
            <Link className='lists-nav' to='/Products'> {t('Products')}</Link>
            <Link className='lists-nav' to='/Contact us'> {t('Contact us')}</Link>
          </div>

          <div>

            {!Token && (<Link to='/Login' className='button-main '>{t('Sign In')}</Link>)}
          </div>
          <div className='flex items-center gap-6'>
            {Token && (<>
              <Link to='/Cart' className='lists-nav' ><ShoppingCart color='#566F6B' className='w-5' /></Link>
              <Link to='#' className='lists-nav'  ><Heart color='#566F6B' className='w-5' /> </Link>
             <DropdownMenu   >
                <DropdownMenuTrigger className='lists-nav hidden md:block' render={<Link variant="ghost" size="icon" className="rounded-full "><User color='#566F6B' className='w-5' /> </Link>}
                />
                <DropdownMenuContent className='max-w-40' align='end'  >
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User />
                      {t('My profile')}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon />
                      {t('Contact us')}
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon />
                    <Link to='/Login' onClick={handlelogout}>{t('Sign Out')} </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
            )}

          </div>


        </div>

       
      </nav>

    </>
  )
}
