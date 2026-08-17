import {CreditCardIcon, Truck} from "lucide-react"


import useCart from '@/assets/hooks/useCart'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuRadioGroup, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useCheckout from "@/assets/hooks/useCheckout";
import Error from "@/assets/components/error/Error";
import { useTranslation } from "react-i18next";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default function Checkout() {

    const {data,isLoading,isError} = useCart();
    const {mutate:checkOut} = useCheckout();
    const {t} = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState("");
    
    

    if(isLoading){
        return <p>lodingggg</p>
    }
    if(isError){
        return <Error/>
    }
    console.log(data.items)
  return (
<main>
  <section className="container py-9">
    <div  className="sm:max-w-7/10 mx-auto border-2 border-primary-bg text-primary-bg">
      <div  className="flex justify-center py-4 border-b border-primary-bg bg-sidebar-border"><h2 className="text-primary-bg ">{t('Order Details')}</h2></div>
      <div className="flex gap-2  overflow-x-auto  p-4 pb-1 bg-primary-bg">
      {data.items.map((item)=>(
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
  <section className="container flex flex-col items-center gap-2 border-t border-primary-bg pb-15">
    <h2 className="text-[20px] text-primary-bg">{t('payment method')}</h2>
    <RadioGroup
  value={paymentMethod}
  onValueChange={setPaymentMethod}
  className="max-w-sm"
>
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
<button disabled={!paymentMethod} className='button-Secondary mt-3 px-25' onClick={() => checkOut(paymentMethod)}> {t('Pay Now')} </button>







  </section>

</main>   

  )
}
