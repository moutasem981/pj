import { CircularProgress, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import UseCategories from '../hoks/UseCategories';

export default function Categories() {

   const {data,isLoading,isError,error} = UseCategories();

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
