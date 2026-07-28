import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../../store/useAuthStore'
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18next';
import { Button } from '@/components/ui/button';
import logo from "../../../img/logo/Faher.svg"
import { Heart, House, Info, MessageCircleQuestionMark, Search, ShoppingCart, TextAlignJustify, User } from 'lucide-react';
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
      <div className='bg-primary-bg '>
        <div className='container flex justify-between items-center py-3'>
          <div></div>
          <div className='text-main text-primary-addres md:text-[12px] flex gap-2 flex-wrap'>
            <p>{t('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!')}</p>
            <Link to='/Products' className='underline '>{t('ShopNow')}</Link>
          </div>
          <div>
            <Button onClick={changeLanguage}>
              {i18n.language === "ar" ? "EN" : "AR"}
            </Button>
          </div>
        </div>
      </div>
      <nav className='border-b shadow sticky w-full top-0 bg-white pt-7 pb-5.5'>
        <div className='container flex justify-between   mx-auto z-40 items-center '>
          <div className='block md:hidden'>
            <DropdownMenu>
      <DropdownMenuTrigger render={<Link>
          <TextAlignJustify color='#566F6B'/> </Link>} />
      <DropdownMenuContent className="text-primary-bg w-screen h-screen" >
        <DropdownMenuGroup>
              <div className='sm:hidden block'>

            <form className='bg-primary-addres rounded-lg flex items-center justify-between '>
              <button className='py-2.5 px-3.5'><Search color='#566F6B' size={20} /></button>
              <input className='w-[90%] focus:outline-none border-0' type="text" placeholder={t('Search for a product')}/>
            </form>
          </div>
          
          <DropdownMenuItem className='p-5'>
            <House color='#566F6B' />
           <Link  to='/'> {t('Home')}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-5'>
            <Info color='#566F6B' />
            <Link to='/About'> {t('About')}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-5'>
            <ShoppingCart color='#566F6B' />
            <Link to='/Products'> {t('Products')}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='p-5'>
            <MessageCircleQuestionMark color='#566F6B' />
             <Link to='/Contact us'> {t('Contact us')}</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {!Token &&(<><DropdownMenuSeparator />
        <DropdownMenuItem className='p-5'>
          <LogOutIcon color='#566F6B' />
        <Link to='/Register'> {t('Sign up')}</Link> 
        </DropdownMenuItem></>)}
      </DropdownMenuContent>
    </DropdownMenu>
          </div>
          <div><img src={logo} /></div>
          <div className='lg:w-[45%] sm:w-[30%] hidden sm:block'>

            <form className='bg-primary-addres rounded-lg flex items-center justify-between '>
              <button className='py-2.5 px-3.5'><Search color='#566F6B' size={20} /></button>
              <input className='w-[90%] focus:outline-none border-0' type="text" placeholder={t('Search for a product')}/>
            </form>
          </div>
          <div className='hidden md:flex gap-4 items-center text-main text-[14px]  '>
            <Link className='lists-nav' to='/'> {t('Home')}</Link>
            <Link className='lists-nav' to='/About'> {t('About')}</Link>
            <Link className='lists-nav' to='/Products'> {t('Products')}</Link>
            <Link className='lists-nav' to='/Contact us'> {t('Contact us')}</Link>
          </div>

          <div>

            {!Token && (<Link to='/Login' className='button-main on'>{t('Sign In')}</Link>)}
          </div>
          <div className='flex items-center gap-6'>
            {Token && (<>
              <Link to='/Cart' className='lists-nav' ><ShoppingCart color='#566F6B' className='w-5' /></Link>
              <Link to='#' className='lists-nav'  ><Heart color='#566F6B' className='w-5' /> </Link>
              <DropdownMenu  >
                <DropdownMenuTrigger className='lists-nav' render={<Link variant="ghost" size="icon" className="rounded-full "><User color='#566F6B' className='w-5' /> </Link>}
                />
                <DropdownMenuContent className='max-w-40' align='end'  >
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheckIcon />
                      My Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Help Center
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BellIcon />
                      Dark Mode
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOutIcon />
                    <Link to='/Login' onClick={handlelogout}>Sign Out </Link>
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
