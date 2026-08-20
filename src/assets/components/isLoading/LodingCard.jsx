import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { CarouselItem } from '@/components/ui/carousel'

export default function LodingCard() {
  return (
   <>
   <CarouselItem className='me-10'>
       <Card className="w-xs">
        <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
     
    </Card>
    </CarouselItem >
    <CarouselItem  className='me-10'>
       <Card className="w-xs">
         <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
     
    </Card>
    </CarouselItem>
    <CarouselItem  >
       <Card className="w-xs">
         <CardContent>
        <Skeleton className="aspect-video w-full" />
      </CardContent>
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </CardHeader>
     
    </Card>
    </CarouselItem>
   
    </>
   
  )
}
