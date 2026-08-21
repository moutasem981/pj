import React, { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslation } from 'react-i18next'
import useProfile from '@/assets/hooks/useProfile'
import { Globe, LockKeyhole, Logs, Mail, MapPinHouse, Phone, Settings, ShieldCheck, ShieldMinus, ShoppingBag, User } from 'lucide-react'
import Error from '@/assets/components/error/Error'
import useUpdateProfile from '@/assets/hooks/useUpdateProfile'

export default function MyProfile() {


  const { data, isLoading, isError } = useProfile();
  console.log(data);
  const { mutate: updateProfile, isPending } = useUpdateProfile();


  const { t } = useTranslation();

  const [page, setPage] = useState(0);
  const [city, setCity] = useState('')


  if (isLoading) return <p>lodiiing</p>
  if (isError) return <Error />

  return (
    <main className='bg-primary-bg'>
      <section className='container pt-12 pb-28 '>
        <Tabs defaultValue="home"  >

          <TabsList className="mb-4 flex  min-w-5/10 mx-auto  ">
            <TabsTrigger className='px-3 py-3 text-main ' value="info">{t('My Information')}</TabsTrigger>
            <TabsTrigger className='px-3 py-3 text-main ' value="order" > {t('My Orders')} </TabsTrigger>
            <TabsTrigger className='px-3 py-3 text-main ' value="settings">{t('Settings')}</TabsTrigger>
          </TabsList>

          <div >
            <TabsContent value="info">
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
                        <ShoppingBag className='text-primary-bg' />
                      </div>
                      <div className='flex flex-col  text-main'>
                        <span className='text-[12px]'>{t('Total Orders')}</span>
                        <span className='text-[18px] font-semibold'>{data.orders.length}</span>
                      </div>
                    </div>
                    <button className='button-Secondary w-full mt-4'>{t('View My Orders')}</button>
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
                        <User className='text-primary-bg' />
                      </div>
                    </div>
                  </div>
                  <div className='body-cart p-5 flex gap-4 items-center md:max-lg:flex-col max-sm:flex-col justify-center w-full mt-5 '>
                    <div className='flex flex-col w-full  gap-4'>
                      <div className="myInfo">
                        <div className='bg-[#566f6b3b] p-2 rounded-full'>
                          <Mail className='text-primary-bg' />
                        </div>
                        <div className='flex flex-col  text-main'>
                          <span className='text-[12px]'>{t('Email Address')}</span>
                          <span className=' font-semibold'>{data.email}</span>
                        </div>
                      </div>
                      <div className="myInfo">
                        <div className='bg-[#566f6b3b] p-2 rounded-full'>
                          <MapPinHouse className='text-primary-bg' />
                        </div>
                        <div className='flex flex-col  text-main'>
                          <span className='text-[12px]'>{t('City')}</span>
                          <span className='font-semibold'>{data.city ? data.city : t('undefined')}</span>
                        </div>
                      </div>

                    </div>
                    <div className='flex flex-col w-full gap-4'>
                      <div className="myInfo">
                        <div className='bg-[#566f6b3b] p-2 rounded-full'>
                          <Phone className='text-primary-bg' />
                        </div>
                        <div className='flex flex-col  text-main'>
                          <span className='text-[12px]'>{t('Phone Number')}</span>
                          <span className=' font-semibold'>{data.phoneNumber}</span>
                        </div>
                      </div>
                      <div className="myInfo">
                        <div className='bg-[#566f6b3b] p-2 rounded-full'>
                          <ShieldCheck className='text-primary-bg' />
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
              <div className='cart max-w-220 mx-auto bg-background  rounded-xl shadow-xl/20 '>
                <div className='top-cart flex justify-between items-center  w-full p-5 border-b border-primary-bg/50 '>
                  <div>

                    <h3 className='text-main font-bold'>{t('Order History')}</h3>
                    <span className='text-primary-addres/70 text-[14px]'>{t('All orders related to your account')}</span>

                  </div>
                  <div>
                    <div className='bg-[#566f6b3b] p-2 rounded-full'>
                      <Logs className='text-primary-bg' />
                    </div>
                  </div>
                </div>
                <div className='body-cart p-5  w-full '>
                  <div className='flex flex-col w-full max-h-150 overflow-y-scroll  gap-4'>
                    {data?.orders?.slice(page * 7, page * 7 + 7).map((order) => (
                      <div key={order.id} className="myInfo flex-col m-2 mb-0 ">
                        <div className='top-cart flex justify-between items-center  w-full p-3 border-b border-primary-bg/50 '>
                          <div className='flex flex-col gap-1'>

                            <span className='text-main text-[14px] font-bold'>{t('Order')} #{order.id}</span>
                            <span className='text-primary-addres text-[14px]'>{order.orderDate}</span>

                          </div>
                          <div className='flex gap-2'>
                            <div className=' px-3 sm:py-1 flex items-center rounded-full bg-green-900/30'>
                              <span className='text-[12px] text-primary-bg'>{order.status}</span>
                            </div>
                            <div className='bg-[#566f6b3b] md:px-3 px-1 py-1 flex text-center items-center rounded-full'>
                              <span className='text-[11px] text-primary-bg'>{order.paymentStatus ? order.paymentStatus : <span className='text-red-400'> {t('Payment not specified')}</span>}</span>
                            </div>
                          </div>
                        </div>
                        <div className='grid grid-flow-col grid-rows-1 max-sm:grid-rows-2 justify--items-center items-center gap-2 w-full '>
                          <div className='flex flex-col justify-start p-3 border border-primary-bg/60 rounded-lg w-full '>
                            <span className='text-[13px] text-foreground/40'>{t('Order ID')}</span>
                            <span>{order.id}</span>
                          </div>
                          <div className='flex flex-col justify-start p-3 border border-primary-bg/60 rounded-lg  w-full '>
                            <span className='text-[13px] text-foreground/40'>{t('Amount Paid')}</span>
                            <span>{order.amountPaid}$</span>
                          </div>
                          <div className='flex flex-col justify-start p-3 border border-primary-bg/60 rounded-lg  w-full '>
                            <span className='text-[13px] text-foreground/40'>{t('Payment Status')}</span>
                            <span>{order.paymentStatus ? order.paymentStatus : t('not specified')}</span>
                          </div>
                          <div className='flex flex-col justify-start p-3 border border-primary-bg/60 rounded-lg   w-full'>
                            <span className='text-[13px] text-foreground/40'>{t('Order Status')}</span>
                            <span>{order.status}</span>
                          </div>
                        </div>

                      </div>
                    ))}




                  </div>
                  <div className="flex justify-center gap-4 mt-5">

                    <button
                      disabled={page === 0}
                      onClick={() => setPage(page - 1)}
                      className="button-Secondary"
                    >
                      {t('Previous')}
                    </button>

                    <button
                      disabled={(page + 1) * 7 >= data.orders.length}
                      onClick={() => setPage(page + 1)}
                      className="button-Secondary"
                    >
                      {t('Next')}
                    </button>

                  </div>


                </div>
              </div>
            </TabsContent>


            <TabsContent value="settings" >
              <div className='cart-2 w-full bg-background  rounded-xl shadow-xl/20 max-w-240 mx-auto '>
                <div className='top-cart flex justify-between items-center  w-full p-5 border-b border-primary-bg/50 '>
                  <div>

                    <h3 className='text-main font-bold'>{t('Settings')}</h3>
                    <span className='text-primary-addres/70 text-[14px]'>{t('Manage your Faher account information and security.')}</span>

                  </div>
                  <div>
                    <div className='bg-[#566f6b3b] p-2 rounded-full'>
                      <Settings className='text-primary-bg' />
                    </div>
                  </div>
                </div>
                <div className='body-cart p-7 flex gap-4 items-center md:max-lg:flex-col max-sm:flex-col justify-center w-full mt-5 '>

                  <div className='p-5 rounded-lg border border-primary-bg w-full bg-primary-bg/20'>
                    <div className='flex gap-3 items-center'>
                      <div>
                      <div className='bg-[#566f6b3b] p-2 rounded-full'>
                      <ShieldMinus className='text-primary-bg' />
                    </div>
                        
                      </div>
                      <div className='flex flex-col'>
                       <span className='text-main'>{t('Account & Security')}</span>
                       <span className='text-[12px] text-foreground/50'>{t('Choose what you would like to manage')}</span>
                      </div>
                    </div>
                    <div className='mt-3 flex max-sm:flex-col gap-3 '>
                      <button className='btn-start border py-3 border-primary-bg rounded-lg flex items-center justify-center gap-2 text-[14px] w-full'><User size={18} /> <span>{t('Update Profile')}</span></button>
                      <button className='btn-start border py-3 border-primary-bg rounded-lg flex items-center justify-center gap-2 text-[14px] w-full'><Mail size={18} /> <span>{t('Change Email')}</span></button>
                      <button className='btn-start border py-3 border-primary-bg rounded-lg flex items-center justify-center gap-2 text-[14px] w-full'><LockKeyhole size={18} /> <span>{t('Change Password')}</span></button>
                    </div>
                   
                  </div>

                </div>
                 <div className='p-5 border-t border-primary-bg/50 bg-primary-bg/20 '>
                     <div className='flex gap-4 items-center'>
                    <div className='bg-[#566f6b3b] p-2 rounded-lg'>
                      <Globe className='text-primary-bg' />
                    </div>
                    <span>Language</span>
                     <select className='bg-background text-primary-bg'>
                   <option>English</option>
                   <option>العربية</option>
                    </select>
                   </div>

                  
                 <div>

                 </div>
                 </div>
              </div>


            </TabsContent>
          </div>
        </Tabs>
      </section>


      {/* <form   onSubmit={(e) => { e.preventDefault(); updateProfile({ city }); }}>
                <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" />
                <button type='submit'>asdasda</button>
              </form> */}
    </main>

  )
}
