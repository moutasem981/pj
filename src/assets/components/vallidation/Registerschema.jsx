import * as yup from "yup";

export const Registerschema = (t) =>
  yup.object({
    fullName: yup
      .string()
      .trim()
      .required(t("Full name is required"))
      .min(3, t("Full name must be at least 3 characters"))
      .max(30, t("Full name must not exceed 30 characters")),

    userName: yup
      .string()
      .trim()
      .required(t("Username is required"))
      .min(3, t("Username must be at least 3 characters"))
      .max(20, t("Username must not exceed 20 characters")),

    email: yup
      .string()
      .trim()
      .required(t("Email is required"))
      .email(t("Please enter a valid email address")),

    city: yup
      .string()
      .trim()
      .required(t("City is required"))
      .min(2, t("City must be at least 2 characters"))
      .max(30, t("City must not exceed 30 characters")),

    phoneNumber: yup
      .string()
      .trim()
      .required(t("Phone number is required"))
      .matches(
        /^[0-9+\-\s()]{7,15}$/,
        t("Please enter a valid phone number")
      ),

    password: yup
      .string()
      .required(t("Password is required"))
      .min(8, t("Password must be at least 8 characters"))
      .max(64, t("Password must not exceed 64 characters"))
      .matches(/[a-z]/, t("Password must contain a lowercase letter"))
      .matches(/[A-Z]/, t("Password must contain an uppercase letter"))
      .matches(/[0-9]/, t("Password must contain a number"))
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        t("Password must contain a special character")
      ),
  });