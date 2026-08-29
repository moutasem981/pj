import React from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {ArrowLeft, Mail,ShieldCheck} from 'lucide-react'
import useForgotPassword from '@/assets/hooks/useForgotPassword'


export default function ForgotPassword() {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { mutate: forgotPassword, isPending } = useForgotPassword();

  const {register, handleSubmit} = useForm();


  const onSubmit = (data) => {
    forgotPassword(data, {

      onSuccess: () => {
        navigate('/ResetPassword', {
          state: {
            email: data.email
          }
        });
      }
    });
  };


  return (

    <section className='container py-12 md:py-16'>

      <div className='max-w-200 mx-auto overflow-hidden rounded-3xl border border-primary-bg/15 bg-background shadow-sm'>

        <div className='grid md:grid-cols-[40%_60%]'>

          <div className='hidden md:flex bg-primary-bg p-8 flex-col justify-between'>

            <div>

              <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center'>
                <ShieldCheck size={20} className='text-white'/>
              </div>

              <h2 className='text-white text-[22px] mt-4'>{t('Forgot your password?')}</h2>
              <p className='text-primary-addres text-[12px]'>{t('Enter your email and we will send you a verification code to reset your password.')}</p>

            </div>

            <p className='text-primary-addres text-[10px]'> FAHER </p>

          </div>

          <div className='p-6 sm:p-8 md:p-10'>
            <Link to='/Login' className='flex items-center gap-2 w-fit text-main text-[12px] hover:text-primary-bg transition-all mb-7' >
             
              <ArrowLeft size={15} className='rtl:rotate-180' /> {t('Back to Sign In')}
            </Link>

            <div className='mb-7'>

              <div className='w-11 h-11 rounded-xl bg-primary-bg/10 flex items-center justify-center'>
                <Mail size={19} className='text-primary-bg'/>
              </div>

              <h1 className='text-primary-bg text-[26px] '>{t('Reset Password')} </h1>

              <p className='text-main text-[12px] mt-2 '> {t('Enter the email address associated with your account.')} </p>

            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

              <div className='flex flex-col gap-5'>

                <div className='flex flex-col gap-2'>

                  <Label htmlFor='email' className='text-main text-[12px]' > {t('Email Address')} </Label>

                  <div className='relative'>
                    <Input {...register('email')} id='email' type='email' placeholder='name@example.com' className='h-11 pe-10 bg-primary-bg/5 border-primary-bg/15 focus:border-primary-bg' />

                    <Mail size={16}  className='absolute end-3 top-1/2 -translate-y-1/2 text-primary-bg/50' />

                  </div>
                </div>

                <button type='submit' disabled={isPending} className='button-Secondary w-full h-11' >
                  { isPending ? t('Sending...') : t('Send Verification Code') }
                </button>

              </div>

            </form>



            <p className='text-main text-[11px] text-center mt-6'>  {t('Remember your password?')}

              <Link to='/Login' className='text-primary-bg font-semibold ms-1' > {t('Sign In')}</Link>

            </p>


          </div>

        </div>

      </div>

    </section>

  )
}