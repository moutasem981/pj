import { CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import useCategories from '../hoks/useCategories';

export default function Categories() {

   const {data,isLoading,isError,error} = useCategories();

    if(isLoading) return <CircularProgress/>
    if(isError) return <Typography color='red'>{error}</Typography>
  return (

    <>
    {data.response.data.map((Category)=>
    <Typography component="h1" variant='h2'>{Category.name}</Typography>
    )
    }
    </>

   )
}
