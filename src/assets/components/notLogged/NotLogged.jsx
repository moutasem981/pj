import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { CircleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';


export default function NotLogged({text}) {
    const navigate =useNavigate();
    const {t} = useTranslation();

  return (
                <Dialog>
                  <DialogTrigger render={<button className={cn('button-Secondary text-white bg-secondary hover:bg-secondary/50 flex gap-2 items-center justify-center max-w-87 w-7/10')}>{text}</button>} />
                  <DialogContent showCloseButton={false}>
                    <DialogHeader className='flex flex-col items-center justify-center gap-10'>
                      <DialogTitle className='flex flex-col items-center text-center justify-center gap-6'>
                        <CircleAlert size={70} className='bg-primary-bg p-1.5 rounded-full' />
                        <p className='text-3xl'>{t('Login Required')}</p>
                        <span>{t('You must be logged in to add items or make purchases.')}</span>
                      </DialogTitle>
                      <DialogDescription className='w-full text-center'>
                        <button onClick={() => navigate('/Login')} className='button-Secondary w-7/10'>{t('Sign In')}</button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              )
            };