import axios from 'axios'
import React, { useState } from 'react'
import { Registerschema } from '../../components/vallidation/Registerschema'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import axiosInstance from "../../../api/axiosInstance"
import { Button } from '@base-ui/react'
export default function Register() {


  const [serverErrors,setserverErrors] = useState({});

    const {register,handleSubmit,formState:{errors,isSubmitting}} =useForm({
      resolver:yupResolver(Registerschema)
    })
    const Registerform = async (data)=>{
        try{
            const response = await axiosInstance.post(`/auth/Account/Register`,data);
            localStorage.setItem("accessToken",response.data.accessToken)
        }
        catch(err){
            setserverErrors(err.response.data.errors);

        }
    }

    
  return (
    <>
    <section>
        <h2 component='h1' variant='h2'>Register</h2>

        {serverErrors?.length > 0 ? serverErrors.map((error)=>
        <p color='error'>{error}</p>   
      ): ''}
        <input onSubmit={handleSubmit(Registerform)} component='form' sx={{display:"flex",flexDirection:"column",gap:5, maxWidth:600,marginX:"auto"}}>
          <input  {...register("fullName")} placeholder="fullName" 
          
          />
          <input type='text' {...register("userName")} placeholder="userName" 
           />
          <input type='email' {...register("email")} placeholder="email" 
          />
          <input type='text'  {...register("phoneNumber")} placeholder="phoneNumber" 
           />
          <input type='password' {...register("password")} placeholder="password" 
           />
          <Button  type='submit' disabled={isSubmitting}>
            {isSubmitting? "loding" : ''}</Button>
        </input>
    </section>
    
    </>
  )
}

