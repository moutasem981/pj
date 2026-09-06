import Products from '@/assets/components/products/Products'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import {  Link, useSearchParams } from "react-router-dom";
import Categories from '@/assets/components/categories/Categories'
import i18n from '@/i18next'
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MoveRight } from 'lucide-react';

export default function AllProducts() {
    const { t } = useTranslation();
      const dir = i18n.dir();

    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get("category");
    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [ascending, setAscending] = useState(true);

    return (
        <main>
            <section className='container flex flex-col gap-10 items-center justify-center overflow-hidden '>
                    <div className='w-full '>
                            <Link onClick={() => navigate('/Products')} className=' group flex items-center gap-2 text-primary-bg text-[13px]  font-semibold pt-5 ' >
                               {t('View all products')}
                              <MoveRight size={16} className=' group-hover:translate-x-1 transition-all' />
                            </Link>    
                      <Carousel className='w-full '
                        opts={{
                          align: "start",
                          direction: dir,
                        }}
                      >
                        <CarouselContent className='xl:w-25/100 lg:w-35/100 sm:w-5/10  w-75/100  text-center my-4 mx-2 '>
            
                            
                          <Categories />
                          
            
            
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                    
                      
            </section>

            <section className=' pt-10 pb-20 '>
                <div className='container flex max-md:flex-col gap-4 justify-between '>

                    <div className='md:w-3/10   border border-primary-bg p-4 rounded-lg  flex flex-col gap-3'>
                        <h3 className='text-main text-lg font-bold'>{t('Filters')}</h3>

                        <div className='flex gap-2 '>
                            <input type="number"  placeholder={t('Min Price')}  value={minPrice}
                                onChange={(e) => setMinPrice(e.target.value)}
                                className='w-1/2 p-2 border border-primary-bg rounded text-sm outline-none'
                            />
                            <input  type="number" placeholder={t('Max Price')} value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                className='w-1/2 p-2 border border-primary-bg rounded text-sm outline-none'
                            />
                        </div>

                        <select  value={sortBy}  onChange={(e) => setSortBy(e.target.value)}
                            className='p-2 border border-primary-bg text-primary-bg rounded text-sm outline-none '
                        >
                            <option value="">{t('Sort By')}</option>
                            <option value="price">{t('Price')}</option>
                            <option value="name">{t('Name')}</option>
                            <option value="rate">{t('Rating')}</option>
                        </select>

                        <select  value={ascending} onChange={(e) => setAscending(e.target.value === 'true')}
                            className='p-2 border border-primary-bg text-primary-bg rounded text-sm outline-none '
                        >
                            <option value="true">{t('Ascending')}</option>
                            <option value="false">{t('Descending')}</option>
                        </select>


                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <input   type="text" placeholder={t('Search for a product')}  value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='p-3 mb-12 border border-primary-bg  text-sm outline-none rounded-full  max-w-xl w-full'
                        />
                        <Carousel >
                            <div className='grid xl:grid-cols-3 sm:grid-cols-2 justify-items-center sm:justify-between gap-y-5'>
                            <Products  search={search}
                                minPrice={minPrice}
                                maxPrice={maxPrice}
                                sortBy={sortBy}
                                ascending={ascending}
                                categoryId={categoryId}
                                
                            />
                            </div>
                        </Carousel>
                    </div>


                </div>
          
            </section>
                  <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
        </main>
    )
}