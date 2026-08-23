import React, { useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useTranslation } from 'react-i18next'
import useProfile from '@/assets/hooks/useProfile'
import { Globe, Moon, Sun, LockKeyhole, Logs, Mail, MapPinHouse, Phone, Settings, ShieldCheck, ShieldMinus, ShoppingBag, User } from 'lucide-react'
import Error from '@/assets/components/error/Error'
import useUpdateProfile from '@/assets/hooks/useUpdateProfile'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useForm } from 'react-hook-form'
import { ProfileSchema } from '@/assets/components/vallidation/ProfileSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from "sonner";
import { UpdateEmailSchema } from "@/assets/components/vallidation/UpdateEmailSchema";
import useUpdateEmail from '@/assets/hooks/useUpdateEmail'
import useChangePassword from '@/assets/hooks/useChangePassword'
import { ChangePasswordSchema } from '@/assets/components/vallidation/ChangePasswordSchema'
import i18n from '@/i18next'
import { useTheme } from '@/assets/components/theme-provider/ThemeProvider'
import { Switch } from "@/components/ui/switch"
import LoadingMyProfile from '@/assets/components/isLoading/LoadingMyProfile'

export default function MyProfile() {

  const { t } = useTranslation();

  const { theme, setTheme } = useTheme();
  const changeLanguage = () => {
    const newLng = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLng);
  };

  const { data, isLoading, isError } = useProfile();

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useUpdateProfile();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(ProfileSchema(t)),
  });

  const { mutate: updateEmail, isPending: isUpdatingEmail } = useUpdateEmail();
  const { register: registerEmail, handleSubmit: handleSubmitEmail, formState: { errors: emailErrors }, } = useForm({
    resolver: yupResolver(UpdateEmailSchema(t)),
  });

  const [DialogOpen, setDialogOpen] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);

  const onSubmit = (formData) => {
    updateProfile(formData, {
      onSuccess: () => {
        toast.success(t("Profile updated successfully"));
        setDialogOpen(false);
      },

      onError: () => {
        toast.error(t("Failed to update profile"));
      },
    });
  };
  const onSubmitEmail = (formData) => {
    updateEmail({ NewEmail: formData.newEmail }, {
      onSuccess: () => {
        toast.success(t("Confirmation email sent. Please check your new email inbox to confirm the change."));
        setEmailDialogOpen(false);
      },
      onError: () => {
        toast.error(t("Failed to update email"));
      },
    });
  };

  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const { mutate: changePassword, isPending: isChangingPassword } = useChangePassword();
  const { register: registerPassword, handleSubmit: handleSubmitPassword, formState: { errors: passwordErrors }, reset: resetPasswordForm } = useForm({
    resolver: yupResolver(ChangePasswordSchema(t)),
  });

  const onSubmitPassword = (formData) => {
    changePassword({
      CurrentPassword: formData.currentPassword,
      NewPassword: formData.newPassword,
      ConfirmNewPassword: formData.confirmNewPassword,
    }, {
      onSuccess: () => {
        toast.success(t("Password changed successfully"));
        resetPasswordForm();
        setPasswordDialogOpen(false);
      },
      onError: () => {
        toast.error(t("Failed to change password. Please check your current password."));
      },
    });
  };
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "info";




  if (isLoading) return <LoadingMyProfile/>
  if (isError) return <Error />

  return (
    <main className='bg-primary-bg'>
      <section className='container pt-12 pb-28 '>
        <Tabs value={currentTab} onValueChange={(value) => { setSearchParams({ tab: value }); }}  >

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
                    <button onClick={() => navigate('/Profile?tab=order')} className='button-Secondary w-full mt-4'>{t('View My Orders')}</button>
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
                      <AlertDialog open={DialogOpen} onOpenChange={setDialogOpen}>
                        <AlertDialogTrigger
                          render={<button type="button" className='btn-start border py-3 border-primary-bg rounded-lg flex items-center justify-center gap-2 text-[14px] w-full'
                          >
                            <User size={18} />
                            <span>{t('Update Profile')}</span>
                          </button>
                          }
                        />

                        <AlertDialogContent className='data-[size=default]:sm:max-w-xl'>

                          <form onSubmit={handleSubmit(onSubmit)}>

                            <AlertDialogHeader>

                              <AlertDialogTitle className='flex gap-2 items-center border-b border-primary-bg/60 pb-4 w-full'>

                                <div className='bg-[#566f6b3b] p-2 rounded-full'>
                                  <User className='text-primary-bg' />
                                </div>

                                <div className='flex flex-col items-start justify-center gap-0'>
                                  <span className='text-main font-bold'>
                                    {t('Personal Information')}
                                  </span>

                                  <span className='text-main text-[14px] text-foreground/50'>
                                    {t('Update your basic account details.')}
                                  </span>
                                </div>

                              </AlertDialogTitle>


                              <AlertDialogDescription className='w-full flex flex-col gap-4 py-4'>

                                <div className='flex flex-col gap-1 sm:w-8/10 text-start'>

                                  <label htmlFor="fullName"> {t('Full Name')} </label>

                                  <input type="text" id="fullName"  {...register("fullName")} defaultValue={data.fullName} className="inpotForm" />

                                  {errors.fullName && (<span className="text-red-500 text-[12px]"> {errors.fullName.message} </span>)}

                                </div>


                                <div className='flex gap-3 max-sm:flex-col'>

                                  <div className='flex flex-col gap-1 sm:w-8/10 text-start'>
                                    <label htmlFor="city">{t('City')} </label>
                                    <input type="text" id="city" {...register("city")} defaultValue={data.city} className='inpotForm' />

                                    {errors.city && (<span className="text-red-500 text-[12px]"> {errors.city.message} </span>)}
                                  </div>



                                  <div className='flex flex-col gap-1 sm:w-8/10 text-start'>

                                    <label htmlFor="phoneNumber"> {t('Phone Number')} </label>

                                    <input {...register("phoneNumber")} type="text" id="phoneNumber" defaultValue={data.phoneNumber} className='inpotForm' />

                                    {errors.phoneNumber && (<span className="text-red-500 text-[12px]"> {errors.phoneNumber.message} </span>)}

                                  </div>

                                </div>

                              </AlertDialogDescription>

                            </AlertDialogHeader>


                            <AlertDialogFooter>

                              <AlertDialogCancel type="button"> {t('Cancel')} </AlertDialogCancel>

                              <button disabled={isUpdatingProfile} className='button-Secondary py-1 px-2 rounded-lg' type="submit" >
                                {isUpdatingProfile ? t("Updating...") : t("Save Changes")}
                              </button>

                            </AlertDialogFooter>

                          </form>

                        </AlertDialogContent>

                      </AlertDialog>

                      <AlertDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen}>
                        <AlertDialogTrigger
                          render={<button className='btn-start border py-3 border-primary-bg rounded-lg flex items-center justify-center gap-2 text-[14px] w-full'>
                            <Mail size={18} /> <span>{t('Change Email')}</span>
                          </button>} />

                        <AlertDialogContent className='data-[size=default]:sm:max-w-xl'>

                          <form onSubmit={handleSubmitEmail(onSubmitEmail)}>

                            <AlertDialogHeader>

                              <AlertDialogTitle className='flex gap-2 items-center border-b border-primary-bg/60 pb-4 w-full'>

                                <div className='bg-[#566f6b3b] p-2 rounded-full'>
                                  <User className='text-primary-bg' />
                                </div>

                                <div className='flex flex-col items-start justify-center gap-0'>
                                  <span className='text-main font-bold'>
                                    {t('Email Address')}
                                  </span>

                                  <span className='text-main text-[14px] text-foreground/50'>
                                    {t('Change the email linked to your account.')}
                                  </span>
                                </div>

                              </AlertDialogTitle>


                              <AlertDialogDescription className='w-full flex flex-col gap-4 py-4'>

                                <input type="email" readOnly value={data.email} className="inpotForm sm:w-8/10 py-3" />

                                <div className='flex flex-col gap-1 sm:w-8/10 text-start'>

                                  <label htmlFor="newEmail">
                                    {t('New Email Address')}
                                  </label>

                                  <input type="email" id="newEmail" {...registerEmail("newEmail")} className='inpotForm py-3' />

                                  {emailErrors.newEmail && (<span className="text-red-500 text-[12px]"> {emailErrors.newEmail.message} </span>)}

                                </div>

                              </AlertDialogDescription>

                            </AlertDialogHeader>


                            <AlertDialogFooter>

                              <AlertDialogCancel type="button"> {t('Cancel')} </AlertDialogCancel>

                              <button disabled={isUpdatingEmail} className='button-Secondary py-1 px-2 rounded-lg' type="submit" >
                                {isUpdatingEmail ? t("Updating...") : t("Save Changes")}
                              </button>

                            </AlertDialogFooter>

                          </form>

                        </AlertDialogContent>

                      </AlertDialog>

                      <AlertDialog open={passwordDialogOpen} onOpenChange={setPasswordDialogOpen}>
                        <AlertDialogTrigger
                          render={<button className='btn-start border py-3 border-primary-bg rounded-lg flex items-center justify-center gap-2 text-[14px] w-full'>
                            <LockKeyhole size={18} /> <span>{t('Change Password')}</span>
                          </button>} />

                        <AlertDialogContent className='data-[size=default]:sm:max-w-xl'>

                          <form onSubmit={handleSubmitPassword(onSubmitPassword)}>

                            <AlertDialogHeader>

                              <AlertDialogTitle className='flex gap-2 items-center border-b border-primary-bg/60 pb-4 w-full'>

                                <div className='bg-[#566f6b3b] p-2 rounded-full'>
                                  <LockKeyhole className='text-primary-bg' />
                                </div>

                                <div className='flex flex-col items-start justify-center gap-0'>
                                  <span className='text-main font-bold'>
                                    {t('Password')}
                                  </span>

                                  <span className='text-main text-[14px] text-foreground/50'>
                                    {t('Update your account password.')}
                                  </span>
                                </div>

                              </AlertDialogTitle>

                              <AlertDialogDescription className='w-full flex flex-col gap-4 py-4'>

                                <div className='flex flex-col gap-1 sm:w-8/10 text-start'>
                                  <label htmlFor="currentPassword">{t('Current Password')}</label>
                                  <input type="password" id="currentPassword" placeholder={t('Enter current password')} {...registerPassword("currentPassword")} className='inpotForm' />
                                  {passwordErrors.currentPassword && (<span className="text-red-500 text-[12px]"> {passwordErrors.currentPassword.message} </span>)}
                                </div>

                                <div className='flex gap-3 max-sm:flex-col'>

                                  <div className='flex flex-col gap-1 sm:w-8/10 text-start'>
                                    <label htmlFor="newPassword">{t('New Password')}</label>
                                    <input type="password" id="newPassword" placeholder={t('Enter new password')} {...registerPassword("newPassword")} className='inpotForm' />
                                    {passwordErrors.newPassword && (<span className="text-red-500 text-[12px]"> {passwordErrors.newPassword.message} </span>)}
                                  </div>

                                  <div className='flex flex-col gap-1 sm:w-8/10 text-start'>
                                    <label htmlFor="confirmNewPassword">{t('Confirm Password')}</label>
                                    <input type="password" id="confirmNewPassword" placeholder={t('Confirm password')} {...registerPassword("confirmNewPassword")} className='inpotForm' />
                                    {passwordErrors.confirmNewPassword && (<span className="text-red-500 text-[12px]"> {passwordErrors.confirmNewPassword.message} </span>)}
                                  </div>

                                </div>

                                <div className='border-l-4 border-primary-bg bg-primary-bg/10 p-3 rounded text-[13px] text-foreground/60'>
                                  {t('Use at least 8 characters and avoid using an old password.')}
                                </div>

                              </AlertDialogDescription>

                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel type="button"> {t('Cancel')} </AlertDialogCancel>
                              <button disabled={isChangingPassword} className='button-Secondary py-1 px-2 rounded-lg' type="submit" >
                                {isChangingPassword ? t("Updating...") : t("Change Password")}
                              </button>
                            </AlertDialogFooter>

                          </form>

                        </AlertDialogContent>

                      </AlertDialog>
                    </div>

                  </div>

                </div>
                <div className='footer p-5  border-t border-primary-bg/70 bg-primary-bg/40 flex flex-col gap-4'>

                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                      <div className='bg-[#566f6b3b] p-2 rounded-lg'>
                        <Globe className='text-primary-bg' size={18} />
                      </div>
                      <span className='text-main'>{t('Language')}</span>
                    </div>
                    <select
                      value={i18n.language}
                      onChange={changeLanguage}
                      className='bg-background text-primary-bg border border-primary-bg/40 rounded-lg px-3 py-2 text-[14px]'
                    >
                      <option value="en">English</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>

                  <div className='flex justify-between items-center'>
                    <div className='flex gap-3 items-center'>
                      <div className='bg-[#566f6b3b] p-2 rounded-lg'>
                        {theme === "dark" ? <Sun className='text-primary-bg' size={18} /> : <Moon className='text-primary-bg' size={18} />}
                      </div>
                      <span className='text-main'>{t('Dark Mode')}</span>
                    </div>
                    <div dir="ltr">
                    <Switch 
                      checked={theme === "dark"}
                      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                    />
                    </div>
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
