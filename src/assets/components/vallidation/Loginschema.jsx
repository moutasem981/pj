 import * as yup from "yup"

export const Loginschema = (t) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .required(t("Email is required"))
      .email(t("Please enter a valid email address")),

    password: yup
      .string()
      .required(t("Password is required")),
  });