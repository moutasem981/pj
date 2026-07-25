import { useContext } from "react"
import { Usecounterstore } from "../../../store/Usecounterstore";
import useCart from "../../hooks/useCart";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table" 
import useRemoveFormCart from "../../hooks/useRemoveFormCart";
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import useClearCart from "../../hooks/useClearCart";
import { useTranslation } from "react-i18next";
import { Button } from "@base-ui/react";
import { Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Cart() {
const {mutate:RemoveItem,isPending} = useRemoveFormCart();
const {mutate:updateItem,isPending:updateItemIspading} = useUpdateCartItem();
const {mutate:clearCart,isPending:clearCartIspading} = useClearCart();



const x = Usecounterstore((state)=> state.Counter);
const increment = Usecounterstore((state)=>state.increment)
const {t} = useTranslation();
const navigate = useNavigate();

const {data,isLoading,isError,error} = useCart()


if(isLoading){
  return <p>loding .....</p>
}
if(isError){
  return <p className="text-red-600">{error.message}</p>
}
const handleUpdate = (productId,action)=>{
  const item = data?.items?.find(i=>i.productId == productId);

  if(action == '+'){
    updateItem({productId,count:item.count+1})
  }
  else{
    if(item.count == 1){
      RemoveItem(item.productId)
    }

   else  {
      updateItem({productId,count:item.count-1})
    }
    
  }
}
console.log(data);
  return (
    <>
    <Table>
      <TableCaption>cart</TableCaption>
      
        <TableHeader>
          <TableRow>
            <TableHead >{t('product name')}</TableHead>
          <TableHead >{t('price')}</TableHead>
          <TableHead >{t('Quntity')}</TableHead>
          <TableHead >{t('Total')}</TableHead>
          <TableHead >{t('Actions')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.items.map((item)=>(
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <dev className='flex items-center '>
                  <Button variant="outline" size="icon" disabled={updateItemIspading} onClick={()=>handleUpdate(item.productId,'+')}>
                    <Plus />
                  </Button>
                  <p component="p">{item.count}</p>
                  <Button variant="outline" size="icon" disabled={updateItemIspading} onClick={()=>handleUpdate(item.productId,'-')}>
                     <Minus />
                  </Button>
                </dev>
              </TableCell>
              <TableCell>{item.totalPrice}</TableCell>
              <TableCell><Button
               onClick={()=>RemoveItem(item.productId)} 
              disabled={isPending}
               color="error">remove</Button></TableCell>
              
    

            </TableRow>

          ))}
         
          
        </TableBody>
      </Table>
    

    <Button onClick={()=>clearCart()} disabled={clearCartIspading} variant="contained" color="error">
        Delet all products
    </Button>
    <Button onClick={()=>navigate('/Checkout')}>Process to chekout </Button>
    </>
  )
}
