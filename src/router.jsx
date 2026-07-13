import { createBrowserRouter } from "react-router";
import Mainlayout from './assets/layout/Mainlayout'
import Home from "./assets/pages/home/Home";
import Cards from "./assets/pages/cards/Cards";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";
import UserContextProvider from "./assets/components/context/UserContext";
import Productsdetails from "./assets/pages/productsdetails/Productsdetails";
import ProutectedRouter from "./ProutectedRouter";

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
        path:'cards',
        element: <ProutectedRouter>
                <UserContextProvider>
                 <Cards/>
                </UserContextProvider>
                </ProutectedRouter>
                
            
       
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'products/:id',
        element:<Productsdetails/>
      }
      
    ]
  },
]);

export default router ;