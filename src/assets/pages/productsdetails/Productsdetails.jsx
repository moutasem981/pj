import React from 'react'
import UseProductsdetails from '../../hooks/UseProductsdetails'
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import useAddToCart from '../../hooks/useAddToCart';

export default function Productsdetails() {


    const {id} = useParams();

    const {mutate:addToCard} = useAddToCart();

    const {data , isLoading , isError , error}  = UseProductsdetails(id);
     if(isLoading) return <CircularProgress/>

    return (
        <Box>
    <Typography>{data.response.name}</Typography>
    <Typography>{data.response.description}</Typography>
    <Button onClick={()=>{addToCard({productId:data.response.id,count:1})}}>add to cart</Button>
    </Box>
  )
}
