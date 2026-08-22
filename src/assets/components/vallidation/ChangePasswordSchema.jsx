import * as yup from "yup";

export const ChangePasswordSchema = (t) =>
  yup.object({
    currentPassword: yup
      .string()
      .trim()
      .required(t("Current password is required")),
    newPassword: yup
      .string()
      .trim()
      .required(t("New password is required"))
      .min(8, t("Use at least 8 characters")),
    confirmNewPassword: yup
      .string()
      .trim()
      .required(t("Please confirm your new password"))
      .oneOf([yup.ref("newPassword")], t("Passwords do not match")),
  });