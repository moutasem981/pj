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
import { useTheme } from '../theme-provider/ThemeProvider';

export default function Navbar() {

  const Token = useAuthStore((state) => state.token);
  const Logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLng = i18n.language === "ar" ? "en" : "ar"
    i18n.changeLanguage(newLng);
  }
const { theme, setTheme } = useTheme();  

  const handlelogout = () => {
    Logout(),
      navigate('/login')
  }

  return (

    <>
      <div className='bg-primary-bg text-main text-primary-addres md:text-[12px] '>
        <div className='container flex justify-center md:justify-between items-center py-3 max-md:hidden'>
          <div></div>
          <div>
            <p className=' inline mr-2'>{t('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!')}</p>
            <Link to='/Products' className='underline '>{t('ShopNow')}</Link>
          </div>
          <div className='hidden md:flex gap-4 items-center'>
            <Link className='flex gap-2 items-center ' onClick={changeLanguage}><Languages size={14} color='#C6C6C6' />
              {i18n.language === "ar" ? "English" : "العربية"}</Link>
            
             <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} >
              {theme === "dark" ? <Sun size={18} color='#C6C6C6' /> : <Moon size={18} color='#C6C6C6' />}
            </button>
          </div>
        </div>
      </div>
  



      <nav className='border-b shadow sticky w-full top-0 bg-background pt-7 pb-5.5 z-50 '>
        <div className='container flex justify-between   mx-auto z-40 items-center  '>
          <div className='inline md:hidden'>
             <Sheet>
          <SheetTrigger render={<Link>
            <TextAlignJustify color='#566F6B' /> </Link>} />
          <SheetContent side={i18n.dir() === "rtl" ? "right" : "left"} className='bg-primary-bg text-white'>
            <SheetHeader className='px-0'>
              <SheetTitle className='mt-6'> </SheetTitle>
             {Token &&(<SheetClose><Link className='SheetClose' to='/'><User color='#fff' />
              {t('My profile')}   </Link></SheetClose>)} 
              <SheetClose><Link className='SheetClose' to='/'><House color='#fff' />
                {t('Home')}</Link></SheetClose>
                <SheetClose><Link className='SheetClose' to='/Products'><ShoppingCart color='#fff' />
                 {t('Products')}</Link></SheetClose>
              <SheetClose><Link className='SheetClose' to='/About'><Info color='#fff' />
                {t('About')}</Link></SheetClose>
              
              <SheetClose><Link className='SheetClose' to='/Contact us'><MessageCircleQuestionMark color='#fff' />
                 {t('Contact us')}</Link></SheetClose>
              <SheetClose><Link className='SheetClose' onClick={changeLanguage}><Languages color='#fff' />
                
              {i18n.language === "ar" ? "English" : "العربية"}</Link></SheetClose>
              <SheetClose>  
             <button className='SheetClose'
              onClick={()=>setTheme(theme === "light"? "dark":"light")}>
              {theme === "light" ? <button><span className='flex gap-3 items-center'> <Moon  /> {t('Dark mode')}  </span></button>:<button><span className='flex gap-3 items-center'> <Sun  />  {t('Light mode')} </span></button>}
             </button>
              </SheetClose>
             {Token ? <>
             <SheetClose><Link className='SheetClose border-t-2' to='/Login' onClick={handlelogout}> <LogOutIcon color='#fff' />
                {t('Sign Out')}</Link></SheetClose>

             </>:
             <>
             <SheetClose><Link className='SheetClose border-t-2' to='/Register'> <LogIn color='#fff' />
                 {t('Sign up')}</Link> </SheetClose>
             </>} 
            </SheetHeader>
          </SheetContent>
        </Sheet>
            
          </div>
          <div>
            <img src={logo} alt='logo to Faher' />
            </div>
          
          <div className='hidden md:flex gap-6 items-center text-main text-[14px]  '>
            <Link className='lists-nav' to='/'> {t('Home')}</Link>
            <Link className='lists-nav' to='/About'> {t('About')}</Link>
            <Link className='lists-nav' to='/Products'> {t('Products')}</Link>
            <Link className='lists-nav' to='/Contact us'> {t('Contact us')}</Link>
          </div>

          <div>
            {Token ? <>
            
             <div className='flex items-center gap-6'>
            {Token && (<>
              <Link to='/Cart' className='lists-nav' ><ShoppingCart color='#566F6B' className='w-5' /></Link>
              <Link to='/favorites' className='lists-nav'  ><Heart color='#566F6B' className='w-5' /> </Link>
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
            </>:<>
            {!Token && (<Link to='/Login' className='button-main '>{t('Sign In')}</Link>)}
            </>}

            
          </div>
         


        </div>

       
      </nav>

    </>
  )
}
