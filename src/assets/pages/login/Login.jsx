import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Loginschema } from '../../components/vallidation/Loginschema'
import useLogin from '@/assets/hooks/useLogin'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import slide1 from "../../../img/sign/SIDE-COLOR.webp"
import slide2 from "../../../img/sign/shop-new.webp"

export default function Login() {

  const [serverErrors,setserverErrors] = useState({});
 


  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(Loginschema)

  });

  const {mutate:Login } = useLogin();


  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  
  return (
    <>


<Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle >
           <h1>Sign In</h1> 
        {serverErrors?.length > 0 ? serverErrors.map((error)=>
        <h2 className='text-red-700'>{error}</h2> ): ''} 
       </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(Login)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email" type="email" {...register("email")}  placeholder="name@example.com" 
            className={errors.email?"border-red-700 border-2":""} 
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" {...register("password")} placeholder="••••••" 
           className={errors.password ?"border-red-700 border-2":""} />

           {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>
          </div>
          <Button type="submit" className="w-full">
          Sign In
        </Button>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div>
          <span>Don’t have an account? </span>
          <Link to='/Register'>Sign Up</Link>
        </div>
        
        <Button variant="outline" className="w-full">
          Sign in with Google
        </Button>
      </CardFooter>
    </Card>



     <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-40 sm:max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
       
          <CarouselItem>
                 <div className="relative h-[500px]">
        <img
          src={slide1}
          alt="Slide 1"
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute inset-y-[55%]">
          <h2 className="text-primary-addres text-[40px] bold font-extrabold">Welcome</h2>
          <p className="text-primary-addres text-[25px] bold font-bold">Just a couple of clicks and we start</p>
        </div>
      </div>

          </CarouselItem>
         
     
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    
    </>
  )
}
