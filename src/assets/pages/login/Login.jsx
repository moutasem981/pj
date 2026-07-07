import React, { useState } from 'react'
import axiosInstance from '../../../api/axiosInstance'
import { Box, Button , TextField, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Loginschema } from '../../components/vallidation/Loginschema'
import useAuthStore from '../../../store/useAuthStore'



export default function Login() {

  const [serverErrors,setserverErrors] = useState({});
  const setToken = useAuthStore((state)=>state.setToken)

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver:yupResolver(Loginschema)
  });

  const loginform = async (data)=>{
    try{

    const response = await axiosInstance.post(`/auth/Account/Login`,data);
    setToken(response.data.accessToken);   
  } 
    catch(err){
      setserverErrors(err.response.data.errors)

    }


  }
  return (
    <>
     <Box component='section'>
        <Typography component='h1' variant='h2'>Login</Typography>

         {serverErrors?.length > 0 ? serverErrors.map((error)=>
        <Typography color='error'>{error}</Typography>   
      ): ''} 
        <Box onSubmit={handleSubmit(loginform)} component='form' sx={{display:"flex",flexDirection:"column",gap:5, maxWidth:600,marginX:"auto"}}>
         
          <TextField id="outlined-basic" {...register("email")} label="email" variant="outlined" 
            error={errors.email} 
            helperText={errors.email?.message} />
            
            
        
          <TextField id="outlined-basic" {...register("password")} label="password" variant="outlined" 
           error={errors.password}
           helperText={errors.password?.message}/>
          <Button variant="contained" type='submit' >
              login </Button>
        </Box>
    </Box>
    
    </>
  )
}
