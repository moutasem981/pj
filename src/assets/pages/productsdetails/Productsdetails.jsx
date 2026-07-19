import React from 'react'
import UseProductsdetails from '../../hooks/UseProductsdetails'
import { useParams } from 'react-router-dom';
import useAddToCart from '../../hooks/useAddToCart';
import { Button } from '@base-ui/react';

export default function Productsdetails() {


    const {id} = useParams();

    const {mutate:addToCard} = useAddToCart();

    const {data , isLoading , isError , error}  = UseProductsdetails(id);
     if(isLoading) return <p>loding .....</p>

    return (
        <div>
    <h2>{data.response.name}</h2>
    <p>{data.response.description}</p>
    <Button onClick={()=>{addToCard({productId:data.response.id,count:1})}}>add to cart</Button>
    </div>
  )
}
