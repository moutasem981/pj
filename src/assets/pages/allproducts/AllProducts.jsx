import Products from '@/assets/components/products/Products'
import { Carousel } from '@/components/ui/carousel'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"

export default function AllProducts() {
    const { t } = useTranslation();

    const [search, setSearch] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [ascending, setAscending] = useState(true);

    return (
        <main>
            <section className='md:py-20 py-10 '>
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