import { useState } from 'react'
import * as React from "react"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Autoplay from "embla-carousel-autoplay"
import { Registerschema } from '../../components/vallidation/Registerschema'
import useRegister from '@/assets/hooks/useRegisters'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { User, Mail, LockKeyhole, MapPin, Phone } from 'lucide-react'
import slide1 from "../../../img/sign/SIDE-COLOR.webp"
import slide2 from "../../../img/sign/shop-new.webp"
import slide3 from "../../../img/sign/Latest-Products.webp"
import googleImg from "../../../img/sign/google.png"


export default function Register() {

  const { t, i18n } = useTranslation();
  const dir = i18n.dir();

  const [serverErrors, setserverErrors] = useState([]);


  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(Registerschema(t))
  });

  const { mutate: RegisterUser } = useRegister();

  const plugin = React.useRef(

    Autoplay({
      delay: 3000,
      stopOnInteraction: false
    })

  );


  const onSubmit = (data) => {
    setserverErrors([]);
    RegisterUser(data, {
      onError: (error) => {
        setserverErrors([t("Something went wrong, please try again")]);
      }
    });
  };


  return (

    <section className=' flex items-center justify-center py-20 px-4'>

      <div className='w-full max-w-320 bg-background rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.15)] flex'>

        <div className='hidden md:block md:w-[48%]'>

          <Carousel key={dir} dir={dir} plugins={[plugin.current]} className='w-full h-full'
            opts={{
              loop: true,
              direction: dir
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >

            <CarouselContent className='h-full ml-0'>

              <CarouselItem className='pl-0'>

                <div className='relative  w-full overflow-hidden'>

                  <img src={slide1} alt="Welcome to Faher" className='w-full h-full object-cover' />

                  <div className='absolute bottom-14 start-0 end-0 text-center px-8 text-white'>
                    <span className='text-[12px] font-semibold tracking-[2px] text-white/75'> {t('WELCOME TO FAHER')} </span>
                    <h2 className='text-[31px] font-bold mt-2'> {t('Welcome Back')} </h2>
                    <p className='text-[14px] leading-6 mt-2 text-white/85 max-w-70 mx-auto'>  {t('Just a couple of clicks and we continue shopping together.')} </p>
                  </div>

                </div>

              </CarouselItem>

              <CarouselItem className='pl-0'>

                <div className='relative h-full w-full overflow-hidden'>

                  <img src={slide2} alt="Shopping with Faher" className='w-full h-full object-cover' />

                  <div className='absolute bottom-14 start-0 end-0 text-center px-8 text-white'>
                    <span className='text-[12px] font-semibold tracking-[2px] text-white/75'> {t('SHOP WITH FAHER')} </span>
                    <h2 className='text-[31px] font-bold mt-2'> {t('Everything You Need')} </h2>
                    <p className='text-[14px] leading-6 mt-2 text-white/85 max-w-70 mx-auto'> {t('Discover products, save your favorites and manage your orders easily.')}</p>

                  </div>

                </div>

              </CarouselItem>

              <CarouselItem className='p-0'>

                <div className='relative h-full w-full overflow-hidden'>

                  <img src={slide3} alt="Latest Faher collection" className='w-full h-full object-cover' />

                  <div className='absolute bottom-14 start-0 end-0 text-center px-8 text-white'>

                    <span className='text-[12px] font-semibold tracking-[2px] text-white/75'> {t('LATEST COLLECTION')} </span>
                    <h2 className='text-[31px] font-bold mt-2'> {t('Upgrade Your Everyday Tech')} </h2>
                    <p className='text-[14px] leading-6 mt-2 text-white/85 max-w-70 mx-auto' >{t('Discover smart technology and everyday essentials designed to make your day easier.')} </p>

                  </div>

                </div>

              </CarouselItem>

            </CarouselContent>

          </Carousel>

        </div>


        <div className='w-full md:w-[52%] md:px-14 md:py-8 sm:p-10 p-6 flex flex-col justify-center'>

          <div className='mb-7'>

            <span className='text-primary-bg text-[12px] font-semibold tracking-[2px]'> {t('GET STARTED')} </span>
            <h1 className='text-secondary text-[35px] font-bold mt-2'> {t('Create Account')}</h1>
            <p className='text-main text-[13px] mt-2'> {t('Fill in your details to create a new account.')} </p>

          </div>

          {serverErrors?.length > 0 && (

            <div className='mb-5 bg-red-50 border border-red-200 rounded-lg p-3'>

              {serverErrors.map((error, index) => (

                <p key={index} className='text-red-700 text-[13px]' > {error} </p>

              ))}
            </div>
          )}


          <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex flex-col gap-4'>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                <div className='flex flex-col gap-2'>

                  <Label htmlFor='fullName' className='text-main text-[12px]' >{t('Full Name')}</Label>

                  <div className='relative'>
                    <Input id='fullName' type='text' {...register("fullName")} placeholder='John Doe' className={`h-12 pe-11 bg-primary-bg/5 ${errors.fullName ? 'border-red-700 border-2' : 'border-primary-bg/15'}`} />

                    <User size={17} className='absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg/60' />

                  </div>

                  {errors.fullName && (
                    <p className='text-[12px] text-destructive'> {errors.fullName.message}</p>
                  )}

                </div>

                <div className='flex flex-col gap-2'>

                  <Label htmlFor='userName' className='text-main text-[12px]' >{t('Username')}</Label>

                  <div className='relative'>
                    <Input id='userName' type='text' {...register("userName")} placeholder='johndoe' className={`h-12 pe-11 bg-primary-bg/5 ${errors.userName ? 'border-red-700 border-2' : 'border-primary-bg/15'}`} />

                    <User size={17} className='absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg/60' />

                  </div>

                  {errors.userName && (
                    <p className='text-[12px] text-destructive'> {errors.userName.message}</p>
                  )}

                </div>

              </div>

              <div className='flex flex-col gap-2'>

                <Label htmlFor='email' className='text-main text-[12px]' >{t('Email')}</Label>

                <div className='relative'>
                  <Input id='email' type='email' {...register("email")} placeholder='name@example.com' className={`h-12 pe-11 bg-primary-bg/5 ${errors.email ? 'border-red-700 border-2' : 'border-primary-bg/15'}`} />

                  <Mail size={17} className='absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg/60' />

                </div>

                {errors.email && (
                  <p className='text-[12px] text-destructive'> {errors.email.message}</p>
                )}

              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

                <div className='flex flex-col gap-2'>

                  <Label htmlFor='city' className='text-main text-[12px]' >{t('City')}</Label>

                  <div className='relative'>
                    <Input id='city' type='text' {...register("city")} placeholder='Nablus' className={`h-12 pe-11 bg-primary-bg/5 ${errors.city ? 'border-red-700 border-2' : 'border-primary-bg/15'}`} />

                    <MapPin size={17} className='absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg/60' />

                  </div>

                  {errors.city && (
                    <p className='text-[12px] text-destructive'> {errors.city.message}</p>
                  )}

                </div>

                <div className='flex flex-col gap-2'>

                  <Label htmlFor='phoneNumber' className='text-main text-[12px]' >{t('Phone Number')}</Label>

                  <div className='relative'>
                    <Input id='phoneNumber' type='text' {...register("phoneNumber")} placeholder='059xxxxxxx' className={`h-12 pe-11 bg-primary-bg/5 ${errors.phoneNumber ? 'border-red-700 border-2' : 'border-primary-bg/15'}`} />

                    <Phone size={17} className='absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg/60' />

                  </div>

                  {errors.phoneNumber && (
                    <p className='text-[12px] text-destructive'> {errors.phoneNumber.message}</p>
                  )}

                </div>

              </div>

              <div className='flex flex-col gap-2'>

                <Label htmlFor='password' className='text-main text-[12px]'  > {t('Password')}</Label>

                <div className='relative'>

                  <Input id='password' type='password' {...register("password")} placeholder='••••••••' className={`h-12 pe-11 bg-primary-bg/5 ${errors.password ? 'border-red-700 border-2' : 'border-primary-bg/15'}`} />

                  <LockKeyhole size={17} className='absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg/60' />

                </div>

                {errors.password && (<p className='text-[12px] text-destructive'> {errors.password.message} </p>)}

              </div>

              <Button type='submit' className='button-Secondary w-full h-12 mt-2' > {t('Sign Up')} </Button>

            </div>

          </form>

          <div className='flex items-center gap-4 my-6'>

            <div className='h-[1px] bg-primary-bg/15 flex-1'></div>

            <span className='text-main/60 text-[11px]'> {t('OR')}</span>

            <div className='h-[1px] bg-primary-bg/15 flex-1'></div>

          </div>


          <Button type='button' variant='outline' className='w-full h-12 border-primary-bg/20 text-main'>

            <img src={googleImg} alt="logo google"  className='w-5'/>
            <span> {t('Sign in with Google')}</span>

          </Button>

          <div className='text-center mt-6 text-[13px]'>

            <span className='text-main'> {t("Already have an account?")}</span>

            <Link to='/Login' className='text-primary-bg font-semibold ms-2 hover:underline' > {t('Sign In')} </Link>

          </div>

        </div>

      </div>

    </section>

  )

}