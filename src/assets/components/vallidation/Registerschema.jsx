 import * as yup from "yup"

 export const Registerschema = yup.object({
    fullName:yup.string().required().min(3).max(20),
    userName:yup.string().required(),
    email:yup.string().required(),
    phoneNumber:yup.string().required(),
    password:yup.string().required(),

  });