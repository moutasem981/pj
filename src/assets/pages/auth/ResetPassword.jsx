import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import {AlertDialog,AlertDialogContent,AlertDialogDescription,AlertDialogFooter, AlertDialogHeader,AlertDialogTitle} from "@/components/ui/alert-dialog"
import { ArrowLeft, KeyRound, LockKeyhole, ShieldCheck, Mail, CircleCheck } from 'lucide-react'
import useResetPassword from '@/assets/hooks/useResetPassword'
import { ResetPasswordSchema } from '@/assets/components/vallidation/ResetPasswordSchema'


export default function ResetPassword() {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [successOpen, setSuccessOpen] = useState(false);
  const { mutate: resetPassword, isPending } = useResetPassword();


  const {register, handleSubmit, setError, formState: { errors } } = useForm({ resolver: yupResolver(ResetPasswordSchema(t)) });


  const onSubmit = (data) => {
    const resetData = {
      email: email,
      code: data.code,
      newPassword: data.newPassword
    };


    resetPassword(resetData, {
      onSuccess: () => {
        setSuccessOpen(true);
      },
      onError: (error) => {
        setError('code', {
          message: error.response?.data?.message || t('Invalid or expired verification code')
        });
      }
    });

  };


  return (

    <section className='container py-12 md:py-16'>

      <div className='max-w-230 mx-auto overflow-hidden rounded-3xl border border-primary-bg/15 bg-background shadow-sm'>
        <div className='grid md:grid-cols-[40%_60%]'>

          <div className='hidden md:flex bg-primary-bg p-8 flex-col justify-between'>

            <div>
              <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center'>
                <ShieldCheck size={20} className='text-white'/>
              </div>

              <h2 className='text-white text-[22px] mt-4'>{t('Create new password')}</h2>

              <p className='text-primary-addres text-[12px]'>{t('Enter the verification code sent to your email and create a new password.')}</p>

            </div>

            <p className='text-primary-addres text-[10px]'>FAHER</p>

          </div>

          <div className='p-6  md:p-10'>

            <Link to='/ForgotPassword' className='flex items-center gap-2 w-fit text-main text-[12px] hover:text-primary-bg transition-all mb-5'>
              <ArrowLeft size={15} className='rtl:rotate-180'/> {t('Back')}
            </Link>

            <div className='mb-5'>

              <div className='w-11 h-11 rounded-xl bg-primary-bg/10 flex items-center justify-center'>
                <KeyRound size={19} className='text-primary-bg'/>
              </div>

              <h1 className='text-primary-bg text-[26px]'>{t('Reset Password')}</h1>
              <p className='text-main text-[12px] '>{t('Enter the code sent to your email and choose a new password.')}</p>


              <div className='flex items-center gap-2 mt-3 text-primary-bg'>
                <Mail size={14}/>
                <span className='text-[11px]'>{email}</span>
              </div>

            </div>


            <form onSubmit={handleSubmit(onSubmit)}>

              <div className='flex flex-col gap-4'>


                <div className='flex flex-col gap-2'>

                  <Label htmlFor='code' className='text-main text-[12px]'>{t('Verification Code')}</Label>

                  <div className='relative'>

                    <Input {...register('code')} id='code' type='text' maxLength={4} placeholder='0000' className={`h-11 pe-10 bg-primary-bg/5 focus:border-primary-bg ${errors.code ? 'border-red-500' : 'border-primary-bg/15'}`}/>

                    <KeyRound size={16} className='absolute end-3 top-1/2 -translate-y-1/2 text-primary-bg/50'/>

                  </div>

                  {errors.code && <p className='text-red-500 text-[11px]'>{errors.code.message}</p>}

                </div>



                <div className='flex flex-col gap-2'>

                  <Label htmlFor='newPassword' className='text-main text-[12px]'>{t('New Password')}</Label>

                  <div className='relative'>

                    <Input {...register('newPassword')} id='newPassword' type='password' placeholder='••••••••' className={`h-11 pe-10 bg-primary-bg/5 focus:border-primary-bg ${errors.newPassword ? 'border-red-500' : 'border-primary-bg/15'}`}/>

                    <LockKeyhole size={16} className='absolute end-3 top-1/2 -translate-y-1/2 text-primary-bg/50'/>

                  </div>

                  {errors.newPassword && <p className='text-red-500 text-[11px]'>{errors.newPassword.message}</p>}

                </div>

                <div className='flex flex-col gap-2'>

                  <Label htmlFor='confirmPassword' className='text-main text-[12px]'>{t('Confirm Password')}</Label>

                  <div className='relative'>

                    <Input {...register('confirmPassword')} id='confirmPassword' type='password' placeholder='••••••••' className={`h-11 pe-10 bg-primary-bg/5 focus:border-primary-bg ${errors.confirmPassword ? 'border-red-500' : 'border-primary-bg/15'}`}/>

                    <LockKeyhole size={16} className='absolute end-3 top-1/2 -translate-y-1/2 text-primary-bg/50'/>

                  </div>

                  {errors.confirmPassword && <p className='text-red-500 text-[11px]'>{errors.confirmPassword.message}</p>}

                </div>

                <button type='submit' disabled={isPending} className='button-Secondary w-full h-11 mt-1'>
                  {isPending ? t('Updating...') : t('Reset Password')}
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>

      <AlertDialog open={successOpen}>

        <AlertDialogContent className='max-w-100 rounded-2xl border-primary-bg/15'>

          <AlertDialogHeader className='items-center text-center'>

            <div className='w-14 h-14 rounded-full bg-primary-bg/10 flex items-center justify-center mx-auto '>
              <CircleCheck size={27} className='text-primary-bg'/>
            </div>

            <AlertDialogTitle className='text-primary-bg mx-auto text-[20px]'>
              {t('Password Changed Successfully')}
            </AlertDialogTitle>

            <AlertDialogDescription className='text-main text-[12px] text-center'>
              {t('Your password has been changed successfully. You can now sign in with your new password.')}
            </AlertDialogDescription>

          </AlertDialogHeader>

          <AlertDialogFooter className='sm:justify-center'>

            <button onClick={() => navigate('/Login')} className='button-Secondary w-full h-10'>
              {t('Done')}
            </button>

          </AlertDialogFooter>

        </AlertDialogContent>

      </AlertDialog>


    </section>

  )
}