import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslation } from 'react-i18next'
import useProfile from '@/assets/hooks/useProfile'
import { Mail, Phone, ShieldCheck, ShoppingBag, User } from 'lucide-react'
import Error from '@/assets/components/error/Error'
import { useNavigate } from 'react-router-dom'

export default function MyProfile() {

   
  const {data , isLoading , isError} = useProfile();
  console.log(data);

  const {t} = useTranslation();
  const navigate= useNavigate();


  if(isLoading) return <p>lodiiing</p>
  if(isError) return <Error/>

  return (
    <main className='bg-primary-bg'>
        <section className='container py-15 md:py-22 '>
             <Tabs defaultValue="home" >
                <div className='flex '>
      <TabsList className="mb-5">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="order" >
          {t('My Orders')}
        </TabsTrigger>
      </TabsList>
      </div>
      <div >
       <TabsContent value="home"> 
        <div className='flex gap-6 max-w-300 mx-auto max-md:flex-col '>
        <div className='cart-1 bg-background p-6 rounded-4xl min-w-70 shadow-xl/20'> 
          <div>
          <div className='w-28 h-28 bg-primary-bg border-4  border-white rounded-full shadow-xl/30 flex items-center justify-center mx-auto'>
            <span className='text-[30px] font-bold text-primary-addres'>
            {data?.fullName[0]}
            </span>
          </div>
          <div className='py-5 border-b border-primary-bg/30 text-center'>
            <h3 className='text-main font-black capitalize text-[18px]'>{data?.fullName}</h3>
            <span className='text-main text-primary-addres text-[14px] mt-1'>{t('Faher Customer')}</span>
          </div>
          </div>
          <div>
            <div className="flex gap-3 items-center bg-primary-bg/10 mt-6 border p-2 border-primary-bg/60 rounded-2xl">
            <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <ShoppingBag className='text-primary-bg'  />
              </div>
              <div className='flex flex-col  text-main'>
                <span className='text-[12px]'>{t('Total Orders')}</span>
                <span className='text-[18px] font-semibold'>{data.orders.length}</span>
              </div>
            </div>
            <button className='button-Secondary w-full mt-4'>{('View My Orders')}</button>
          </div>
        </div>
        <div className='cart-2 w-full bg-background  rounded-xl shadow-xl/20 '>
          <div className='top-cart flex justify-between items-center  w-full p-5 border-b border-primary-bg/50 '>
            <div>
              
                <h3 className='text-main font-bold'>{t('Personal Information')}</h3>
                <span className='text-primary-addres/70 text-[14px]'>{t('Your account contact information')}</span>
              
            </div>
            <div>
               <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <User className='text-primary-bg'  />
              </div>
            </div>
          </div>
          <div className='body-cart p-5 flex gap-4 items-center md:max-lg:flex-col max-sm:flex-col justify-center w-full mt-5 '>
            <div className='flex flex-col w-full  gap-4'>
            <div className="myInfo">
            <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <Mail  className='text-primary-bg'  />
              </div>
              <div className='flex flex-col  text-main'>
                <span className='text-[12px]'>{t('Email Address')}</span>
                <span className=' font-semibold'>{data.email}</span>
              </div>
            </div>
            <div className="myInfo">
            <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <ShoppingBag className='text-primary-bg'  />
              </div>
              <div className='flex flex-col  text-main'>
                <span className='text-[12px]'>{t('City')}</span>
                <span className='font-semibold'>{data.city ? data.city : t('undefined') }</span>
              </div>
            </div>
           
            </div>
            <div className='flex flex-col w-full gap-4'>
             <div className="myInfo">
            <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <Phone  className='text-primary-bg'  />
              </div>
              <div className='flex flex-col  text-main'>
                <span className='text-[12px]'>{t('Phone Number')}</span>
                <span className=' font-semibold'>{data.phoneNumber}</span>
              </div>
            </div>
              <div className="myInfo">
            <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <ShieldCheck className='text-primary-bg'  />
              </div>
              <div className='flex flex-col  text-main'>
                <span className='text-[12px]'>{t('Account Status')}</span>
                <span className=' font-semibold'>{t('Active')}</span>
              </div>
            </div>
            </div>
            
          </div>
        </div>
          </div>
      </TabsContent>
     

      <TabsContent value="order">
        <div className='cart-2 max-w-260 mx-auto bg-background  rounded-xl shadow-xl/20 '>
          <div className='top-cart flex justify-between items-center  w-full p-5 border-b border-primary-bg/50 '>
            <div>
              
                <h3 className='text-main font-bold'>{t('Order History')}</h3>
                <span className='text-primary-addres/70 text-[14px]'>{t('All orders related to your account')}</span>
              
            </div>
            <div>
               <div className='bg-[#566f6b3b] p-2 rounded-full'> 
              <User className='text-primary-bg'  />
              </div>
            </div>
          </div>
          <div className='body-cart p-5 flex gap-4 items-center md:max-lg:flex-col max-sm:flex-col justify-center w-full '>
            <div className='flex flex-col w-full  gap-4'>
              {data?.orders?.map((order)=>(
                <div key={order.id} className="myInfo ">
              <div className='top-cart flex justify-between items-center  w-full p-3 border-b border-primary-bg/50 '>
            <div className='flex flex-col gap-1'>
              
                <span className='text-main text-[14px] font-bold'>{t('Order')} #{order.id}</span>
                <span className='text-primary-addres text-[14px]'>{order.orderDate}</span>
              
            </div>
            <div className='flex gap-4'>
               <div className='bg-[#566f6b3b] px-3 py-1 flex items-center rounded-full'> 
             <span className='text-[12px] text-primary-bg'>{order.status}</span>
              </div>
                <div className='bg-[#566f6b3b] px-3 py-1 flex items-center rounded-full'> 
             <span className='text-[12px] text-primary-bg'>{order.paymentStatus ? order.paymentStatus  : ('Payment not specified') }</span>
              </div>
            </div>
          </div>

            </div>
              ))}
           
           
           
            </div>
            
            
          </div>
        </div>
              </TabsContent>
      </div>
    </Tabs>
        </section>
    </main>
   
  )
}
