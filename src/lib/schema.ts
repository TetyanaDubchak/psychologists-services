import * as yup from "yup";

export const schemaLogin = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
}).required();

export const schemaRegistration = yup.object({
  name: yup.string().required("Name is required").min(2,"Name must be at least 2 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
}).required();

export const schemaMeeting = yup.object({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  phone: yup.number().required("Phone is required").min(9, "Phone must be 9 characters").max(9, "Phone must be 9 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  times: yup.number(),
  comment: yup.string()
}).required();