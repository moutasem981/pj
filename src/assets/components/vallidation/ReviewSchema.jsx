import * as yup from "yup";

export const ReviewSchema = (t) => yup.object({

  Rating: yup
    .number()
    .min(1, t("Please choose a rating"))
    .required(t("Please choose a rating")),

  Comment: yup
    .string()
    .trim()
    .required(t("Review is required")),

});