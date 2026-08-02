import { createBrowserRouter } from "react-router";
import Mainlayout from './assets/layout/Mainlayout'
import Home from "./assets/pages/home/Home";
import Cart from "./assets/pages/cart/Cart";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";
import Productsdetails from "./assets/pages/productsdetails/Productsdetails";
import ProutectedRouter from "./ProutectedRouter";
import Checkout from "./assets/pages/checkout/Checkout";
import AllProducts from "./assets/pages/allproducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'cart',
        element: <ProutectedRouter>
                
                 <Cart/>
                
                </ProutectedRouter>
                
            
       
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'Products',
        element:<AllProducts/>
      },
      {
        path:'products/:id',
        element:<Productsdetails/>
      },
      {
        path:'Checkout',
        element: <ProutectedRouter>
                
                 <Checkout/>
                
                </ProutectedRouter>
                
            
       
      }
      
    ]
  },
]);

export default router ;