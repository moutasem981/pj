import React from 'react'
import { useTranslation } from 'react-i18next'
import errorbg from './error-bg.svg'

export default function Error() {
    const {t} = useTranslation();
  return (
    <div style={{backgroundImage:`url(${errorbg})`}} className=' bg-cover bg-center w-screen'>
       <h1>404</h1>
        <div>
            <h2>{t('Page not Found!!!')}</h2>
            <p>{t("The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.")}</p>
        </div>
        <button>{t('BACK TO HOME')}</button>
    </div>
  )
}
