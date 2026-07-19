import React, { useState } from 'react'
import axiosInstance from '../../../api/axiosInstance'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Loginschema } from '../../components/vallidation/Loginschema'
import useAuthStore from '../../../store/useAuthStore'
import { useNavigate } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { Button } from '@base-ui/react'




export default function Login() {

  const [serverErrors,setserverErrors] = useState({});
  const setToken = useAuthStore((state)=>state.setToken)
  const navigate = useNavigate();


  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(Loginschema)

  });

  const loginform = async (data)=>{
    try{

    const response = await axiosInstance.post(`/auth/Account/Login`,data);
    setToken(response.data.accessToken);
    navigate('/');

  } 
    catch(err){
      setserverErrors(err.response.data.errors)

    }


  }
  return (
    <>
     <section>
        <h1>Login</h1>

         {serverErrors?.length > 0 ? serverErrors.map((error)=>
        <h2 className='text-red-700'>{error}</h2>   
      ): ''} 
      <Card>
        
        <form onSubmit={handleSubmit(loginform)} >
           
        <div>
           
         
          <input type='email'  {...register("email")}  placeholder="name@example.com" 
            className={errors.email?"border-destructive":""} />
            
            {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            
            
        
          <input type='password' {...register("password")} placeholder="••••••" 
           className={errors.password ?"border-destructive":""}/>

           {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
           </div>
          <Button  type='submit' >
              login </Button>
                
        </form>
        
        </Card>
    </section>
    
    </>
  )
}
