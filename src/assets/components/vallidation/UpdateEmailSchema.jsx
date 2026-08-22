import * as yup from "yup";

export const UpdateEmailSchema = (t) =>
  yup.object({
    newEmail: yup
      .string()
      .trim()
      .required(t("Email is required"))
      .email(t("Please enter a valid email address")),
  });