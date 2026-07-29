import { useQuery } from '@tanstack/react-query';
import React from 'react'
import UseCategories from '../../hooks/UseCategories';
import Error from '../error/Error';

export default function Categories() {

   const {data,isLoading,isError} = UseCategories();

    if(isLoading) return <p>loding .....</p>
    if(isError) return <Error />
  return (

    <>
    {data.response.data.map((Category)=>
    <h2 key={Category.id} > {Category.name}</h2>
    )
    }
    </>

   )
}
