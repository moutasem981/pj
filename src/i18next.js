import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Home": "Home",
          "Register": "Register",
          "Login": "Login",
          "Cart": "Cart",
          "Logout": "Logout",
          "Categories": "Categories",
          "product name": "product name",
          "price": "price",
          "Quntity": "Quntity",
          "Total": "Total",
          "Actions": "Actions",
          "Page not Found!!!": "Page not Found!!!",
          "The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.":
          "The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.",
          "BACK TO HOME":"BACK TO HOME",
        }
      },
       ar: {
        translation: {
          "Home": "الرئيسية",
           "Register": "انشاء حساب",
          "Login": "تسجيل الدخول",
          "Cart": "السلة",
          "Logout": "تسجيل خروج",
          "Categories":"التصنيفات",
          "product name": "اسم المنتج",
          "price": "السعر",
          "Quntity": "الكمية",
          "Total": "المجموع",
          "Actions": "إجراءات",
          "Page not Found!!!":"الصفحة غير موجودة!!!",
          "The page you are looking for doesn't exist. Please try searching for some other page, or return to the website's homepage to find what you're looking for.":
          "الصفحة التي تبحث عنها غير موجودة. يرجى محاولة البحث عن صفحة أخرى، أو العودة إلى الصفحة الرئيسية للموقع للعثور على ما تبحث عنه.",
           "BACK TO HOME":"العودة إلى الصفحة الرئيسية",


        }
      }
    },
    fallbackLng: "en",

    
  });
  export default i18n;