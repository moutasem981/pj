import { CreditCardIcon, Truck, User, Mail, Phone, MapPin, House } from "lucide-react"
import useCart from '@/assets/hooks/useCart'
import React, { useState } from 'react'
import useCheckout from "@/assets/hooks/useCheckout";
import Error from "@/assets/components/error/Error";
import { useTranslation } from "react-i18next";
import { Field, FieldContent, FieldDescription, FieldLabel, FieldTitle, } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutSchema } from "@/assets/components/vallidation/CheckoutSchema";


export default function Checkout() {

  const { data, isLoading, isError } = useCart();
  const { mutate: checkOut, isPending } = useCheckout();
  const { t } = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(CheckoutSchema(t))
  });

  const onSubmit = () => {
    checkOut(paymentMethod);
  }


  if (isLoading) {
    return <p>lodingggg</p>
  }
  if (isError) {
    return <Error />
  }
  console.log(data.items)
  return (
    <main>
      <section className="container py-9 md:py-15">
        <form onSubmit={handleSubmit(onSubmit)} className="sm:max-w-7/10 mx-auto">

          <div className="border border-primary-bg/30 rounded-2xl overflow-hidden">

            <div className="px-5 py-4 border-b border-primary-bg/20 bg-sidebar-border">

              <h2 className="text-[20px] font-semibold text-primary-bg"> {t('Shipping Information')} </h2>
              <p className="text-[13px] text-main mt-1"> {t('Enter your delivery information to complete your order')} </p>

            </div>

            <div className="p-5">

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">

                  <Label htmlFor="fullName" className="text-main" > {t('Full Name')} </Label>

                  <div className="relative">
                    <Input id="fullName" type="text" placeholder={t('Enter your full name')} {...register("fullName")} className={`h-12 pe-11 bg-primary-bg/5 ${errors.fullName ? "border-red-700 border-2" : "border-primary-bg/20"}`} />
                    <User size={18} className="absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg" />

                  </div>
                  {errors.fullName && <p className="text-[12px] text-destructive"> {errors.fullName.message} </p>}

                </div>

                <div className="flex flex-col gap-2">

                  <Label htmlFor="email" className="text-main" >  {t('Email')} </Label>

                  <div className="relative">

                    <Input id="email" type="email" placeholder={t('Enter your email')} {...register("email")} className={`h-12 pe-11 bg-primary-bg/5 ${errors.email ? "border-red-700 border-2" : "border-primary-bg/20"}`} />
                    <Mail size={18} className="absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg" />

                  </div>

                  {errors.email && <p className="text-[12px] text-destructive">  {errors.email.message} </p>}

                </div>

                <div className="flex flex-col gap-2">

                  <Label htmlFor="phoneNumber" className="text-main" > {t('Phone Number')} </Label>

                  <div className="relative">
                    <Input id="phoneNumber" type="text" placeholder="059XXXXXXX" {...register("phoneNumber")} className={`h-12 pe-11 bg-primary-bg/5 ${errors.phoneNumber ? "border-red-700 border-2" : "border-primary-bg/20"}`} />

                    <Phone size={18} className="absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg" />

                  </div>
                  {errors.phoneNumber && <p className="text-[12px] text-destructive"> {errors.phoneNumber.message}  </p>}

                </div>

                <div className="flex flex-col gap-2">

                  <Label htmlFor="city" className="text-main" > {t('City')} </Label>

                  <div className="relative">

                    <Input id="city" type="text" placeholder={t('Enter your city')} {...register("city")} className={`h-12 pe-11 bg-primary-bg/5 ${errors.city ? "border-red-700 border-2" : "border-primary-bg/20"}`} />
                    <MapPin size={18} className="absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg" />

                  </div>
                  {errors.city && <p className="text-[12px] text-destructive">  {errors.city.message}  </p>}

                </div>

              </div>


              <div className="flex flex-col gap-2 mt-4">

                <Label htmlFor="address" className="text-main"  >  {t('Address')} </Label>

                <div className="relative">
                  <Input id="address" type="text" placeholder={t('Enter your delivery address')}  {...register("address")} className={`h-12 pe-11 bg-primary-bg/5 ${errors.address ? "border-red-700 border-2" : "border-primary-bg/20"}`} />
                  <House size={18} className="absolute end-4 top-1/2 -translate-y-1/2 text-primary-bg" />

                </div>

                {errors.address && <p className="text-[12px] text-destructive">  {errors.address.message} </p>}

              </div>

            </div>

          </div>

          <div className="flex flex-col items-center gap-2 border-t border-primary-bg mt-8 pt-6">

            <h2 className="text-[20px] text-primary-bg"> {t('payment method')} </h2>

            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="max-w-sm w-full" >

              <FieldLabel htmlFor="visa">

                <Field orientation="horizontal">

                  <FieldContent>

                    <FieldTitle className="flex items-center gap-2">

                      <CreditCardIcon className="w-5 h-5" />

                      {t('Credit Card')}

                    </FieldTitle>

                    <FieldDescription>
                      {t('Pay using your credit card.')}
                    </FieldDescription>

                  </FieldContent>

                  <RadioGroupItem value="Visa" id="visa" />

                </Field>

              </FieldLabel>


              <FieldLabel htmlFor="cash">

                <Field orientation="horizontal">

                  <FieldContent>

                    <FieldTitle className="flex items-center gap-2">

                      <Truck className="w-5 h-5" />

                      {t('Cash on delivery')}

                    </FieldTitle>

                    <FieldDescription>
                      {t('Pay when your order arrives.')}
                    </FieldDescription>

                  </FieldContent>

                  <RadioGroupItem value="cash" id="cash" />

                </Field>

              </FieldLabel>

            </RadioGroup>


            <button type="submit" disabled={!paymentMethod || isPending} className="button-Secondary mt-3 px-25" >
              {isPending ? t('Processing...') : t('Pay Now')}
            </button>

          </div>

        </form>
      </section>

      <section className="container pb-15">


        <div className="sm:max-w-7/10 mx-auto border-2 border-primary-bg text-primary-bg">
          <div className="flex justify-center py-4 border-b border-primary-bg bg-sidebar-border"><h2 className="text-primary-bg ">{t('Order Details')}</h2></div>
          <div className="flex gap-2  overflow-x-auto  p-4 pb-1 bg-primary-bg">
            {data.items.map((item) => (
              <div key={item.productId} className="w-50 h-60 shrink-0 bg-background rounded-lg shadow-xl/20 border-2 border-sidebar-border p-2 flex flex-col justify-around items-center inset-shadow-xs ">
                <h3 className="text-main font-black">{item.productName}</h3>
                <span>{('Price')} : {item.price}$</span>
                <span>{t('Quantity')} : {item.count}</span>
                <span>{t('Total Price : ')}{item.totalPrice}$</span>
              </div>
            ))}
          </div>
          <div className=" flex justify-evenly px-10 text-[22px] font-bold py-4 border-t border-primary-bg bg-sidebar-border"><span>{t('TOTAL')} :</span> <span>{data.cartTotal}$</span></div>
        </div>
      </section>

    </main>

  )
}
