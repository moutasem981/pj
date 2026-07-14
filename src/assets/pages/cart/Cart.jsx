import { useContext } from "react"
import { UserContext } from "../../components/context/UserContext"
import { Usecounterstore } from "../../../store/Usecounterstore";
import useCart from "../../hooks/useCart";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

export default function Cart() {
const {userName,userAge} =useContext(UserContext);

const x = Usecounterstore((state)=> state.Counter);
const increment = Usecounterstore((state)=>state.increment)

const {data,isLoading,isError,error} = useCart()

if(isLoading){
  return <CircularProgress/>
}
if(isError){
  return <Typography color="error">{error.message}</Typography>
}

console.log(data);
  return (
    <>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>product name</TableCell>
          <TableCell>price</TableCell>
          <TableCell>Quntity</TableCell>
          <TableCell>Total</TableCell>
          <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.items.map((item)=>(
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.product}</TableCell>
              <TableCell>{item.totalPrice}</TableCell>
    

            </TableRow>

          ))}
         
          
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
