import React from 'react'
import useAuthStore from './store/useAuthStore'
import { Navigate } from 'react-router-dom';

export default function ProutectedRouter({children}) {

 const Token = useAuthStore((state)=>state.token);

 if(!Token){
    return <Navigate to='/login' />
 }
 return children;
}
