import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
export default function LoadingMyProfile() {
  return (
    <div className='container flex max-md:flex-wrap gap-4 justify-center py-20'>
    <Card className="w-full max-w-xs">
      <CardHeader>
          <Skeleton className="aspect-video h-40 w-40 rounded-full mx-auto" />
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>
      <Skeleton className="h-4 w-2/3 mx-auto"  />
      <Skeleton className="h-4 w-1/2 mx-auto" />
      <div className="mt-6 flex flex-col gap-2">
      <Skeleton className=" w-8/10 mx-auto h-12" />
      <Skeleton className="h-5 w-1/2 mx-auto" />
      </div>
      </CardContent>
    </Card>

     <div className="flex w-full  flex-col border border-primary-bg/40 gap-2 p-8 rounded-lg">
     <div className="flex flex-col justify-start gap-2 pb-10">
     <Skeleton className="h-4 w-2/10 "  />
      <Skeleton className="h-4 w-3/10  " />
      </div>
      {Array.from({ length: 2 }).map((_, index) => (
        <div className="flex max-md:flex-wrap gap-4" key={index}>
          <Skeleton className="h-15 w-5/10 mx-auto " />
          <Skeleton className="h-15 w-5/10 mx-auto " />
         
         
        </div>
      ))}
    </div>
    
     </div>
     )
}
