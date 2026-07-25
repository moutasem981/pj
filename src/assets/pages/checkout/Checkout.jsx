import {CreditCardIcon, Truck} from "lucide-react"


import useCart from '@/assets/hooks/useCart'
import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuRadioGroup, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useCheckout from "@/assets/hooks/useCheckout";

export default function Checkout() {

    const {data,isLoading,isError,error} = useCart();
    const {mutate:checkOut} = useCheckout();

  const [paymentMethod, setPaymentMethod] = useState("");
    
    

    if(isLoading){
        return <p>lodingggg</p>
    }
    if(isError){
        return <p>{error}</p>
    }
    console.log(data.items)
  return (
    <>
    {data.items.map((item)=>(
        <div>
            <p>{item.productName}</p>
            <p>{item.totalPrice}</p>
        </div>
    ))}
      <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline"
      
      >Payment Method</Button>} />
      <DropdownMenuContent className="min-w-56">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Select Payment Method</DropdownMenuLabel>
          <DropdownMenuRadioGroup
            value={paymentMethod}
            onValueChange={setPaymentMethod}
          >
            <DropdownMenuRadioItem value={"Visa"}>
              <CreditCardIcon />
              Credit Card
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"cash"}>
              <Truck />
              Cash on delivery
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
      <button onClick={()=>checkOut(paymentMethod)} >pay new</button>
    </DropdownMenu>
    </>
  )
}
