import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Registerschema } from '../../components/vallidation/Registerschema'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
export default function Register() {


  const [serverErrors,setserverErrors] = useState({});

    const {register,handleSubmit,formState:{errors,isSubmitting}} =useForm({
      resolver:yupResolver(Registerschema)
    })
    const Registerform = async (data)=>{
        try{
            const response = await axios.post(`${import.meta.env.VITE_BURL}/auth/Account/Register`,data);
            console.log(response);
        }
        catch(err){
            setserverErrors(err.response.data.errors);

        }
    }

    
  return (
    <>
    <Box component='section'>
        <Typography component='h1' variant='h2'>Register</Typography>

        {serverErrors?.length > 0 ? serverErrors.map((error)=>
        <Typography color='error'>{error}</Typography>   
      ): ''}
        <Box onSubmit={handleSubmit(Registerform)} component='form' sx={{display:"flex",flexDirection:"column",gap:5, maxWidth:600,marginX:"auto"}}>
          <TextField id="outlined-basic" {...register("fullName")} label="fullName" variant="outlined" 
          error={errors.fullName}
          helperText={errors.fullName?.message}
          />
          <TextField id="outlined-basic" {...register("userName")} label="userName" variant="outlined"
          error={errors.userName}
          helperText={errors.userName?.message} />
          <TextField id="outlined-basic" {...register("email")} label="email" variant="outlined" 
          error={errors.email}
          helperText={errors.email?.message}/>
          <TextField id="outlined-basic"  {...register("phoneNumber")} label="phoneNumber" variant="outlined"
          error={errors.phoneNumber}
          helperText={errors.phoneNumber?.message} />
          <TextField id="outlined-basic" {...register("password")} label="password" variant="outlined" 
          error={errors.password}
          helperText={errors.password?.message} />
          <Button variant="contained" type='submit' disabled={isSubmitting}>
            {isSubmitting? <CircularProgress/> : ''}</Button>
        </Box>
    </Box>
    
    </>
  )
}

