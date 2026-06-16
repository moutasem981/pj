import { createBrowserRouter } from "react-router";
import Mainlayout from './assets/layout/Mainlayout'
import Home from "./assets/pages/home/Home";
import Cards from "./assets/pages/cards/Cards";
import Login from "./assets/pages/login/Login";


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
        element:<Cards/>
      }
    ]
  },
]);

export default router ;