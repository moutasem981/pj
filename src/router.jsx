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
import Favorites from "./assets/pages/favorites/Favorites";
import MyProfile from "./assets/pages/myprofile/MyProfile";
import { Faq } from "./assets/pages/faq/Faq";
import About from "./assets/pages/about/About";
import ContactUs from "./assets/pages/ContactUs/ContactUs";
import ForgotPassword from "./assets/pages/auth/ForgotPassword";
import ResetPassword from "./assets/pages/auth/ResetPassword";

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
        path:'favorites',
        element: <ProutectedRouter>
                
                 <Favorites/>
        
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
        path:'faq',
        element:<Faq/>
      },
      {
        path:'products/:id',
        element:<Productsdetails/>
      },
      
      {
        path:'about',
        element:<About/>
      },
      {
        path:'Contact',
        element:<ContactUs/>
      },
      {
        path:'ForgotPassword',
        element:<ForgotPassword/>
      },
      {
        path:'ResetPassword',
        element:<ResetPassword/>
      },
      {
        path:'Checkout',
        element: <ProutectedRouter>
                
                 <Checkout/>
                
                </ProutectedRouter>
                
            
       
      }
      ,
      {
        path:'Profile',
        element: <ProutectedRouter>
                
                 <MyProfile/>
                
                </ProutectedRouter>
                
            
       
      }
      
    ]
  },
]);

export default router ;