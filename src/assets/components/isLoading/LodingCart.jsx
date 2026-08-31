import useCart from '@/assets/hooks/useCart';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import React from 'react'
export default function LodingCart() {

  const { data } = useCart();


  return (
    <main>
      <section className=" py-8 md:py-20 container ">

        {data?.items?.length > 0 ? <div className="flex w-full max-w-5xl flex-col gap-6 border border-primary-bg/50 rounded-xl mx-auto p-3 ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex gap-4 " key={index}>
              <Skeleton className="h-15 flex-1" />
              <Skeleton className="h-15 w-24" />
              <Skeleton className="h-15 w-20" />
            </div>
          ))}
        </div> 
        
        : 
        
        <Card className="w-full max-w-4xl mx-auto">

          <CardContent>
            <Skeleton className="aspect-video w-full" />
          </CardContent>
        </Card>}

      </section>


    </main>
  )
}
