import useCart from "../../hooks/useCart";

import useRemoveFormCart from "../../hooks/useRemoveFormCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import useClearCart from "../../hooks/useClearCart";
import { useTranslation } from "react-i18next";
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Error from "@/assets/components/error/Error";
import useCartQuantity from "@/assets/hooks/useCartQuantity";
import { toast } from "sonner";
import { Trash2Icon } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import LodingCart from "@/assets/components/isLoading/LodingCart";

export default function Cart() {
    const { t } = useTranslation();
      const navigate = useNavigate();

  const { data, isLoading, isError } = useCart()
  const { mutate: RemoveItem, isPending } = useRemoveFormCart();
  const { mutate: clearCart, isPending: clearCartIspading } = useClearCart();
  const { updateQuantity, isPending: isUpdatingQuantity } = useCartQuantity();


  function handleRemove(productId, productName) {
    RemoveItem(productId);
    toast.error(productName, {
      description: t('Deleted'),

    })
  }


  if (isLoading) {
    return <LodingCart/>
  }
  if (isError) {
    return <Error />
  }

  return (


    <main>
      <section className='container py-15 flex max-md:flex-col  gap-6 items-start'>
        <div className='border-2 border-primary-addres p-4 max-w-4xl mx-auto w-full  md:w-7/10'>
          <div className=' border-b border-primary-addres py-3'>
            <h2 className='text-primary-bg'>{t('Shopping List')}</h2>
          </div>
          {data?.items?.length === 0 ? (
            <div className='flex flex-col gap-3 justify-center items-center py-6' >

              <ShoppingCart size={180} className='text-primary-bg bg-chart-1 rounded-full p-5 ' />

              <h3 className='text-main font-black pt-2'>{t('Your shopping cart is empty.')}</h3>
              <p className='text-main'>{t('There are no products in your shopping list yet. You will find many featured products on the products page.')}</p>
            </div>
          ) :
            <div className='max-h-150 overflow-y-auto '>
              {data?.items?.map((product) => (
                <div key={product.productId} className='flex justify-between items-center gap-3 py-4  px-3 border border-primary-addres'>

                  <div className='flex flex-col ps-2 text-start  w-8/10 text-primary-bg'>
                    <h3>{product.productName}</h3>
                    <span className='text-[14px]'>{product.totalPrice}$</span>

                  </div>

                  <div className='flex items-center bg-sidebar-border rounded-sm text-primary-bg border border-primary-bg p-1 gap-0.5'>
                    <button className="btn-start p-0 "  disabled={isUpdatingQuantity} onClick={() => updateQuantity(product.productId, product.count, "+")} >
                      <Plus size={18} />
                    </button>
                    <p className='border-x px-1 border-primary-bg'>{product.count}</p>
                    <button className="btn-start p-0 "   disabled={isUpdatingQuantity} onClick={() => updateQuantity(product.productId, product.count, "-")}>
                      <Minus size={18} />
                    </button>
                  </div>
                  <div>
                    <button onClick={() => handleRemove(product.productId, product.productName)}> <Trash2 className=" text-red-500 " />
                    </button>
                  </div>
                </div>
              ))}
            </div>}
           {data?.items?.length > 0 && (<div className="flex justify-center"> 
           
             <AlertDialog>
      <AlertDialogTrigger
        render={  <button className="button-Secondary bg-red-900 mt-4 hover:bg-red-400 md:w-4/10 ">
            {t('Delet all products')}
          </button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>{t('Delete Cart')} ?</AlertDialogTitle>
          <AlertDialogDescription>
            {t('Are you sure you want to remove all products from the shopping cart?')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">{t('Cancel')}</AlertDialogCancel>
          <AlertDialogAction  onClick={() => clearCart()} disabled={clearCartIspading}  variant="destructive">{t('Delete')}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
           </div>)} 

        </div>
        {data.items.length >=1  && (
        <div className=" max-w-100 mx-auto pt-6 md:w-3/10 bg-sidebar-border rounded-xl shadow-xl/30 overflow-hidden">
          <form action="" className="border-y border-primary-bg py-4 text-primary-bg ">
            <label className="text-[14px] font-bold ps-2">{t('Discount code:')}</label>
            <div className="flex flex-wrap  gap-2 ps-2">
              <input type="text" placeholder="SAVE20" className="border-2 border-primary-addres rounded-full px-3.5 py-2.5 max-lg:max-w-[200px]" />
              <button className="btn-start border border-primary-addres ">{t('Apply')}</button>
            </div>
          </form>
          <div className="text-main font-bold text-[18px] py-5 flex flex-col justify-between gap-4">
            <p className="text-center ">{t('Order Summary')}</p>
            <div className="  px-10 text-main ">
              <div className=" flex justify-between gap-1"><span>{t('Order value')}</span> <span>{data.cartTotal}$</span></div>
              <div className="flex justify-between gap-1 py-4 border-b border-primary-bg">
                <span>{t('Discount value')}</span>
               <span>00$</span>
              </div>

              <div></div>
            </div>
          </div>
          <div className="text-main flex flex-col gap-3">
            <div className=" flex justify-between px-10 text-[20px] font-bold"><span>{t('TOTAL')}</span> <span>{data.cartTotal}$</span></div>
            <button disabled={data?.items?.length === 0} className="button-Secondary mx-3 mt-4" onClick={() => navigate('/Checkout')}>{t('Buy Now')} </button>
            <p className="text-[13px] px-1">{t('*Custom orders need a few working days to be created. More info here')}</p>

          </div>

         
       
        </div>
      ) }
     
      </section>

      

    </main>
  )
}
