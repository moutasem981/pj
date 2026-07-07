 import * as yup from "yup"

 export const Loginschema = yup.object({
    email:yup.string().required(),
    password:yup.string().required(),
 })