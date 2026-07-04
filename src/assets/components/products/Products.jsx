import React from 'react'
import UseProducts from '../../hooks/UseProducts'
import { Typography } from '@mui/material';

export default function Products() {

    const {data,isloding,isError,error} = UseProducts();

    if(isloding) return <> <Typography component='h1' variant='h1'>loding....</Typography> </>
    if(isError) return <Typography>{error}</Typography>

  return (
    <>
    <Card>

        
    </Card>
    </>
  )
}
