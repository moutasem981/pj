import React from 'react'
import UseProductsdetails from '../../hooks/UseProductsdetails'
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';

export default function Productsdetails() {

    const {id} = useParams();

    const {data , isLoading , isError , error}  = UseProductsdetails(id);
     if(isLoading) return <CircularProgress/>

    return (
        <Box>
    <Typography>{data.response.name}</Typography>
    <Typography>{data.response.description}</Typography>
    </Box>
  )
}
