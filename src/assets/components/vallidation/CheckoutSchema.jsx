import * as yup from "yup";

export const CheckoutSchema = (t) => yup.object({

  fullName: yup
    .string()
    .required(t("Full name is required")),
  email: yup
    .string()
    .email(t("Enter a valid email"))
    .required(t("Email is required")),
  phoneNumber: yup
    .string()
    .required(t("Phone number is required")),
  city: yup
    .string()
    .required(t("City is required")),
  address: yup
    .string()
    .required(t("Address is required")),
});