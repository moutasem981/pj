import { useQuery } from '@tanstack/react-query';
import React from 'react'
import UseCategories from '../../hooks/UseCategories';
import Error from '../error/Error';
import { CarouselItem } from '@/components/ui/carousel';
import { Image } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Categories() {

  const { data, isLoading, isError } = UseCategories();

  if (isLoading) return <p>loding .....</p>
  if (isError) return <Error />

  return (
    <>
      {data.response.data.map((Category) => (
        <CarouselItem key={Category.id} className='max-w-[100px] py-2 pl-0 rounded-lg border border-primary-bg mx-7 hover:scale-110 transition-all duration-300 '>
          <Link to={`/Products?category=${Category.id}`} className='flex flex-col gap-3 items-center '>
            <div className='flex'>
              <div className='bg-primary-bg/30 p-1 rounded-full'>
                <div className='bg-primary-bg p-1 rounded-full'>
                  <Image size={30} color='#fff' />
                </div>
              </div>
            </div>
            <h3 className='text-main text-[18px] '> {Category.name}</h3>
          </Link>

        </CarouselItem>
      ))}
    </>
  )
}