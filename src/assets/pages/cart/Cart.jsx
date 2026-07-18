import { useContext } from "react"
import { UserContext } from "../../components/context/UserContext"
import { Usecounterstore } from "../../../store/Usecounterstore";
import useCart from "../../hooks/useCart";
import { Box, Button, CircularProgress, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import useRemoveFormCart from "../../hooks/useRemoveFormCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useUpdateCartItem from "../../hooks/useUpdateCartItem";
import useClearCart from "../../hooks/useClearCart";
import { useTranslation } from "react-i18next";

export default function Cart() {
const {userName,userAge} =useContext(UserContext);
const {mutate:RemoveItem,isPending} = useRemoveFormCart();
const {mutate:updateItem,isPending:updateItemIspading} = useUpdateCartItem();
const {mutate:clearCart,isPending:clearCartIspading} = useClearCart();



const x = Usecounterstore((state)=> state.Counter);
const increment = Usecounterstore((state)=>state.increment)
const {t} = useTranslation();

const {data,isLoading,isError,error} = useCart()


if(isLoading){
  return <CircularProgress/>
}
if(isError){
  return <Typography color="error">{error.message}</Typography>
}
const handleUpdate = (productId,action)=>{
  const item = data.items.find(i=>i.productId == productId);

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
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('product name')}</TableCell>
          <TableCell>{t('price')}</TableCell>
          <TableCell>{t('Quntity')}</TableCell>
          <TableCell>{t('Total')}</TableCell>
          <TableCell>{t('Actions')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.items.map((item)=>(
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <Box sx={{display:"flex",alignItems:"center"}}>
                  <IconButton disabled={updateItemIspading} onClick={()=>handleUpdate(item.productId,'+')}>
                    <AddIcon fontSize="small"/>
                  </IconButton>
                  <Typography component="p">{item.count}</Typography>
                  <IconButton disabled={updateItemIspading} onClick={()=>handleUpdate(item.productId,'-')}>
                     <RemoveIcon fontSize="small"/>
                  </IconButton>
                </Box>
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
    </TableContainer>

    <Button onClick={()=>clearCart()} disabled={clearCartIspading} variant="contained" color="error">
        Delet all products
    </Button>
    </>
  )
}
