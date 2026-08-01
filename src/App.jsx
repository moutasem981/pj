import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './i18next'
import { useTranslation } from 'react-i18next'
import { ThemeProvider } from './assets/components/theme-provider/ThemeProvider'


export default function App() {

const {i18n} = useTranslation();
useEffect(()=>{
   const dir = i18n.language === "ar"? "rtl": "ltr";
   document.documentElement.dir = dir;
},
   [i18n.language]
)
const queryClient = new QueryClient()


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </ThemeProvider>

  )
}
