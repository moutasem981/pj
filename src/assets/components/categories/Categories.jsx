import { useQuery } from '@tanstack/react-query';
import React from 'react'
import UseCategories from '../../hooks/UseCategories';

export default function Categories() {

   const {data,isLoading,isError,error} = UseCategories();

    if(isLoading) return <p>loding .....</p>
    if(isError) return <p className='text-red-700'>{error}</p>
  return (

    <>
    {data.response.data.map((Category)=>
    <h2 key={Category.id} > {Category.name}</h2>
    )
    }
    </>

   )
}
