import { createBrowserRouter } from "react-router";
import Mainlayout from './assets/layout/Mainlayout'
import Home from "./assets/pages/home/Home";
import Cards from "./assets/pages/cards/Cards";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";
import UserContextProvider from "./assets/components/context/UserContext";

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
        element:<UserContextProvider>
                 <Cards/>
                </UserContextProvider>
            
       
      },
      {
        path:'register',
        element:<Register/>
      }
    ]
  },
]);

export default router ;