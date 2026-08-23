import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger, 
} from "@/components/ui/accordion"

import { useTranslation } from "react-i18next"

export function Faq() {

  const { t } = useTranslation()

  return ( 
   <div className="container flex px-3 justify-center items-center mx-auto py-10 md:py-20 text-main"> 
 
  <Accordion defaultValue={["shipping"]} className="w-full max-w-2xl"> 
 
    <AccordionItem value="shipping"> 
      <AccordionTrigger className="text-main"> 
        {t("What are your shipping options?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping is available on eligible orders.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="returns"> 
      <AccordionTrigger className="text-main"> 
        {t("What is your return policy?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("Returns are accepted within 30 days. Items must be unused and in their original packaging. Refunds are usually processed within 5-7 business days.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="support"> 
      <AccordionTrigger className="text-main"> 
        {t("How can I contact customer support?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("You can contact our customer support team through email, phone, or our contact page. We usually respond within 24 hours.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="payment"> 
      <AccordionTrigger className="text-main"> 
        {t("What payment methods do you accept?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("We support multiple secure payment methods including credit cards, debit cards, and other available payment options during checkout.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="tracking"> 
      <AccordionTrigger className="text-main"> 
        {t("How can I track my order?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("Once your order has been shipped, you can check its status from the My Orders page in your account.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="cancel"> 
      <AccordionTrigger className="text-main"> 
        {t("Can I cancel or change my order?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("You can request to cancel or update your order before it has been shipped. Once the order is shipped, changes may no longer be available.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="international"> 
      <AccordionTrigger className="text-main"> 
        {t("Do you offer international shipping?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("Yes, international shipping is available for selected countries. Shipping fees and delivery times may vary depending on your location.")}
      </AccordionContent> 
    </AccordionItem> 
 
 
    <AccordionItem value="damaged"> 
      <AccordionTrigger className="text-main"> 
        {t("What should I do if my order arrives damaged?")}
      </AccordionTrigger> 
 
      <AccordionContent className="text-main/80"> 
        {t("If your order arrives damaged or incorrect, please contact our support team and provide your order details so we can help resolve the issue.")}
      </AccordionContent> 
    </AccordionItem> 
 
  </Accordion> 
 
</div> 
  ) 
}