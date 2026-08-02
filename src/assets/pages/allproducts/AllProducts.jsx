import Products from '@/assets/components/products/Products'
import { Carousel } from '@/components/ui/carousel'
import React from 'react'

export default function AllProducts() {
  return (
    <main>
        <section>
            <div className='container flex '>
                <div>

                </div>
            <Carousel>
                <Products/>
            </Carousel>
            </div>
        </section>
    </main>
  )
}
