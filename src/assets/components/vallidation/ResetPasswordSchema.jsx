import * as yup from "yup";


export const ResetPasswordSchema = (t) =>

  yup.object({

    code: yup
      .string()
      .trim()
      .required(t("Verification code is required"))
      .matches(/^\d{4}$/, t("Verification code must be 4 digits")),

    newPassword: yup
      .string()
      .trim()
      .required(t("New password is required"))
      .min(8, t("Use at least 8 characters"))
      .matches(/[A-Z]/, t("Password must contain an uppercase letter"))
      .matches(/[a-z]/, t("Password must contain a lowercase letter"))
      .matches(/[0-9]/, t("Password must contain a number"))
      .matches(/[^A-Za-z0-9]/, t("Password must contain a special character")),

    confirmPassword: yup
      .string()
      .trim()
      .required(t("Please confirm your new password"))
      .oneOf([yup.ref("newPassword")], t("Passwords do not match")),

  });